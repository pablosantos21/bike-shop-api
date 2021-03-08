import {Schema} from 'mongoose';

export const BikeSchema = new Schema({
    name:String,
    brand:String,
    price:Number,
    imageURL:String
});