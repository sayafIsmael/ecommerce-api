import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
    Logger
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        // Add your custom authentication logic here
        // for example, call super.logIn(request) to establish a session.
        return super.canActivate(context);
    }

    handleRequest(err, user, info) {
        // You can throw an exception based on either "info" or "err" arguments
        if (err || !user) {
            throw err || new UnauthorizedException();
        }
        Logger.log(user)
        user.roles = ['ADMIN_UPDATE_OWN_VIDEO', 'USER_CREATE_ANY_VIDEO']
        return user;
    }
}