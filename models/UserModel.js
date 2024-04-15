import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    father:{
        type:String,
    },
    gender:{
        type:String,
    },
    status: {
        type:Boolean,
        default:false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    role:{
        type: String,
        default: 'user',
    },
    address:{
        type:String,
    }
});


export default models.User || model('User', UserSchema);
