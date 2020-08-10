import * as mongoose from 'mongoose';

export interface User extends mongoose.Document  {
    name: String;
    email: String;
    role: String;
    password: String;
}