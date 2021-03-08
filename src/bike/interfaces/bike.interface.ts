import {Document} from 'mongoose';

export interface Bike extends Document {
    readonly name:string;
    readonly brand:string;
    readonly price:number;
    readonly imageURL:string;
}
