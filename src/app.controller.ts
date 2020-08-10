import { Controller, Get, Request, Post, UseGuards, Body} from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { ACGuard, UseRoles, UserRoles } from 'nest-access-control';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private readonly appService: AppService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() req) {
    return this.authService.login(req);
  }

  @Post('auth/register')
  async register(@Body() req) {
    return this.authService.register(req);
  }

  @UseGuards(JwtAuthGuard, ACGuard)
  @UseRoles({
    resource: 'video',
    action: 'read',
    possession: 'any',
  })
  @Get()
  root(@UserRoles() userRoles: any) {
    return this.appService.root(userRoles);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}