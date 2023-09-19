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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AttractionsService } from './attractions.service';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
export declare class AttractionsController {
    private readonly attractionsService;
    constructor(attractionsService: AttractionsService);
    create(createAttractionDto: CreateAttractionDto): Promise<import("./entities/attraction.entity").Attraction>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./entities/attraction.entity").Attraction> & import("./entities/attraction.entity").Attraction & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("./entities/attraction.entity").Attraction> & import("./entities/attraction.entity").Attraction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/attraction.entity").Attraction, "find">;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./entities/attraction.entity").Attraction> & import("./entities/attraction.entity").Attraction & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./entities/attraction.entity").Attraction> & import("./entities/attraction.entity").Attraction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/attraction.entity").Attraction, "findOne">;
    update(id: string, updateAttractionDto: UpdateAttractionDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, import("./entities/attraction.entity").Attraction> & import("./entities/attraction.entity").Attraction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/attraction.entity").Attraction, "updateOne">;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("./entities/attraction.entity").Attraction> & import("./entities/attraction.entity").Attraction & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/attraction.entity").Attraction, "deleteOne">;
}
