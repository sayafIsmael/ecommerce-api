import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interface/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {
    }

    async create(createProductDto: CreateProductDto): Promise<any> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }
}
