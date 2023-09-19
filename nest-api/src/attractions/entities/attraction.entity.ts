


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AttractionDocument = Attraction & Document;

@Schema()

// Attraction
export class Attraction {
    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    detail: string;

    @Prop()
    coverimage: string;

    @Prop({ type: Number, precision: 10, scale: 8 })
    latitude: number;

    @Prop({ type: Number, precision: 11, scale: 8 })
    longitude: number;


}

export const AttractionSchema = SchemaFactory.createForClass(Attraction);