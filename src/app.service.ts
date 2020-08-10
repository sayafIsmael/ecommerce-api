import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private videos: string[] = ['Funny Cats', 'Ninja Dogs'];
  root(roles: string[]) {
    return {
      videos: this.videos,
      userRoles: roles
    }
  }
}
