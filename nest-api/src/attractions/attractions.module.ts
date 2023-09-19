import { Module } from '@nestjs/common';
import { AttractionsService } from './attractions.service';
import { AttractionsController } from './attractions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Attraction, AttractionSchema } from './entities/attraction.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Attraction.name, schema: AttractionSchema }])],
  controllers: [AttractionsController],
  providers: [AttractionsService],
})
export class AttractionsModule {}
