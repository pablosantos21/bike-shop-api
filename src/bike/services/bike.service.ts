import { Body, Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';


import {Bike} from '../interfaces/bike.interface';
import {CreateBikeDTO} from '../dto/bike.dto';

@Injectable()
export class BikeService {

    constructor(@InjectModel('Bike') private readonly bikeModel:Model<Bike>){}
    async getBikes(): Promise<Bike[]> {
        const bikes = await this.bikeModel.find();
        return bikes;
    }
    //NOT USED IN THIS PROJECT
    // async getBike(bikeID:string):Promise<Bike>{
    //     const bike = await this.bikeModel.findById(bikeID);
    //     return bike;
    // }
    // async createBike(createBikeDTO:CreateBikeDTO): Promise<Bike>{
    //     const bike = new this.bikeModel(createBikeDTO);
    //     return await bike.save();
    // }
    // async deleteBike(bikeID:string):Promise<Bike>{
    //     const deletedBike=  await this.bikeModel.findByIdAndDelete(bikeID);
    //     return deletedBike;
    // }
    // async updateBike(bikeID:string, createBikeDTO:CreateBikeDTO):Promise<Bike>{
    //     const updateBike=  await this.bikeModel.findByIdAndUpdate(bikeID,createBikeDTO,{new:true});
    //     return updateBike;
    // }
    
}
