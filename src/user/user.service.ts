import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    }

    private readonly logger = new Logger(UserService.name);

    async findOne(email: string, fields: string = null): Promise<User> {
        return await this.userModel.findOne({ email: email }, fields).select('-__v');
    }

    async create(createUserDto: CreateUserDto): Promise<any> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async update(reqUser: CreateUserDto) {
        let response = await this.userModel.updateOne(
            { username: reqUser.username },
            {
                $set: reqUser
            });
        if (response) {
            let user = await this.findOne(reqUser.username.toString())
            return {
                success: true,
                data: user
            }
        } else {
            return {
                success: false,
                message: "Server error"
            }
        }
    }
}
