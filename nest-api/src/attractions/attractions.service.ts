import { Injectable } from '@nestjs/common';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
import { Attraction } from './entities/attraction.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AttractionsService {

  constructor(
    @InjectModel(Attraction.name)
    private attractionModel: Model<Attraction>
  ) { }

  create(createAttractionDto: CreateAttractionDto): Promise<Attraction> {
    return new this.attractionModel(createAttractionDto).save();
  }

  findAll() {
    return this.attractionModel.find();
  }

  findOne(id: number) {
    return this.attractionModel.findOne({ id });
  }

  update(id: number, updateAttractionDto: UpdateAttractionDto) {
    return this.attractionModel.updateOne({ id }, { $set: { ...updateAttractionDto } })
  }

  remove(id: number) {
    return this.attractionModel.deleteOne({ id })
  }
}
