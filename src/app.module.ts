import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BikeModule } from './bike/bike.module';

import{MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [BikeModule,MongooseModule.forRoot('mongodb://localhost/bikeShop')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
