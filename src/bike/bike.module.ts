import { Module } from '@nestjs/common';
import { BikeController } from './bike.controller';
import { BikeService } from './services/bike.service';
import {MongooseModule} from '@nestjs/mongoose';
import {BikeSchema} from './schemas/bike.schema'
@Module({
  imports:[MongooseModule.forFeature([
    {name:"Bike", schema:BikeSchema}
  ])],
  providers: [BikeService],
  controllers: [BikeController]
})
export class BikeModule {}
