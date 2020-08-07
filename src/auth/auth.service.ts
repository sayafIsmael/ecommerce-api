import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);

        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.userId};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(user) {
        const existingUser = await this.userService.findOne(user.email);

        if (existingUser) {
            return { error: "user allready exist" }
        }
        const saltRounds = 10;

        user.password = bcrypt.hashSync(user.password, saltRounds)
        let createdUser: any = await this.userService.create(user)

        const payload = { email: createdUser.email, sub: createdUser.userId };
        if (createdUser.email) {
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
        return { error: "something wrong" }
    }
}