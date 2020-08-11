import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    avatarUri: {
        type: String,
        trim: true
    },
    location: {
        type: Array,
        required: false,
        trim: false
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'basic',
        enum: ["basic", "supervisor", "admin"]
    },
    isPremium: {
        type: Boolean,
        default: false,
    }
})

