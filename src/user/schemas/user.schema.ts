import * as mongoose from 'mongoose';

// export const UserSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     username: String,
//     password: String,
//     location: Array,
//     avatarUri: String,
//     // like: [mongoose.Schema.Types.ObjectId],
//     type: String,
//     isPremium: Boolean,

// }, { versionKey: false })

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

//   const User = mongoose.model('user', UserSchema)