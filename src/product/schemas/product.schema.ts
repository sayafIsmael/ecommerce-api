import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    manufacture_details: {
        type: Object,
    },
    shipping_details: {
        type: Object,
    },
    quantity: {
        type: Number,
        required: true,
    },
    pricing: {
        type: Object,
        required: true,
    },
    categories: {
        type: Array,
        required: true
    }
})

