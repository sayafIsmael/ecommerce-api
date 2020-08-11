import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ACGuard, UseRoles, UserRoles } from 'nest-access-control';
import { ProductService } from './product.service';

@Controller('product')
@UseGuards(JwtAuthGuard, ACGuard)
export class ProductController {
    constructor(private readonly productService: ProductService) {}


    @UseRoles({
        resource: 'product',
        action: 'read',
        possession: 'any',
    })
    @Get()
    root(@UserRoles() userRoles: any) {
        return userRoles;
    }

    @UseRoles({
        resource: 'product',
        action: 'create',
        possession: 'any',
    })
    @Post('create')
    async create(@Body() req) {
        try {
            return await this.productService.create(req);
        } catch (error) {
            return error
        }
    }
}
