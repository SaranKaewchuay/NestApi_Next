/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
import { Attraction } from './entities/attraction.entity';
import { Model } from 'mongoose';
export declare class AttractionsService {
    private attractionModel;
    constructor(attractionModel: Model<Attraction>);
    create(createAttractionDto: CreateAttractionDto): Promise<Attraction>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Attraction> & Attraction & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, Attraction> & Attraction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Attraction, "find">;
    findOne(id: number): import("mongoose").Query<import("mongoose").Document<unknown, {}, Attraction> & Attraction & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, Attraction> & Attraction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Attraction, "findOne">;
    update(id: number, updateAttractionDto: UpdateAttractionDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, Attraction> & Attraction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Attraction, "updateOne">;
    remove(id: number): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, Attraction> & Attraction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Attraction, "deleteOne">;
}
