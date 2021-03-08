import { Controller,Get,Post,Put,Delete, Res ,HttpStatus, Body, HttpService, Param, NotFoundException, Query} from '@nestjs/common';
import {CreateBikeDTO} from './dto/bike.dto';
import {BikeService} from './services/bike.service';

@Controller('bike')
export class BikeController {


    constructor(private bikeService:BikeService){

    }
    // @Post('/create')
    // async createPost(@Res() res, @Body() createBikeDTO:CreateBikeDTO){
    //    const bike = await this.bikeService.createBike(createBikeDTO);
    //    return res.status(HttpStatus.OK).json({
    //        message:"bike succesfully created",
    //        bike:bike
    //    })

    // }
    @Get()
   async  getBikes(@Res() res){
      const bikes = await  this.bikeService.getBikes();
      res.status(HttpStatus.OK).json(
          bikes
      )
    }
    // @Get('/:bikeID')
    // async getBike(@Res() res, @Param('bikeID') bikeID  ){
    //     const bike = await this.bikeService.getBike(bikeID);
    //     if(!bike){
    //         throw new NotFoundException('bike does not exist');
    //     }
    //     return res.status(HttpStatus.OK).json(bike);
    // }

    // @Delete('/delete')
    // async deleteBike(@Res() res, @Query('bikeID') bikeID){
    //     const bike = await this.bikeService.deleteBike(bikeID);
    //     if(!bike){
    //         throw new NotFoundException('bike does not exist');
    //     }
    //     return res.status(HttpStatus.OK).json({
    //         message:'Bike deleted',
    //         bikeDeleted:bike
    //     })
    // }
    // @Put('/update')
    // async updateBike(@Res() res,@Body() createBikeDTO:CreateBikeDTO,@Query('bikeID') bikeID){
    //     const bike = await this.bikeService.updateBike(bikeID,createBikeDTO);
    //     if(!bike){
    //         throw new NotFoundException('bike does not exist');
    //     }
    //     return res.status(HttpStatus.OK).json({
    //         message:"Bike updated",
    //         bikeUpdated:bike
    //     }); 
    // }
}
