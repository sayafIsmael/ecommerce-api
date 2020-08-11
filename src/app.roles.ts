import { RolesBuilder } from 'nest-access-control';
export enum AppRoles {
  USER_CREATE_ANY_VIDEO = 'USER_CREATE_ANY_VIDEO',
  ADMIN_UPDATE_OWN_VIDEO = 'ADMIN_UPDATE_OWN_VIDEO',
}

let grantsObject = {
  admin: {
    product: {
      'create:any': ['*', '!views'],
      'read:any': ['*'],
      'update:any': ['*', '!views'],
      'delete:any': ['*']
    },
    category: {
      'create:any': ['*', '!views'],
      'read:any': ['*'],
      'update:any': ['*', '!views'],
      'delete:any': ['*']
    }
  },
  user: {
    cart: {
      'create:own': ['*', '!rating', '!views'],
      'read:own': ['*'],
      'update:own': ['*', '!rating', '!views'],
      'delete:own': ['*']
    }
  }
};

export const roles: RolesBuilder = new RolesBuilder(grantsObject);