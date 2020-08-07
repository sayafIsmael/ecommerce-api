import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    location: Array,
    avatarUri: String,
    // like: [mongoose.Schema.Types.ObjectId],
    type: String,
    isPremium: Boolean,

}, { versionKey: false })