import * as mongoose from 'mongoose';

export interface Product extends mongoose.Document {
    title: String;
    description: String;

    manufacture_details?: {
        model_number: String;
        release_date: String
    };

    shipping_details?: {
        weight: Number;
        width: Number;
        height: Number;
        depth: Number
    };

    quantity: Number;

    pricing: {
        price: Number
    }
}