"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttractionsService = void 0;
const common_1 = require("@nestjs/common");
const attraction_entity_1 = require("./entities/attraction.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AttractionsService = class AttractionsService {
    constructor(attractionModel) {
        this.attractionModel = attractionModel;
    }
    create(createAttractionDto) {
        return new this.attractionModel(createAttractionDto).save();
    }
    findAll() {
        return this.attractionModel.find();
    }
    findOne(id) {
        return this.attractionModel.findOne({ id });
    }
    update(id, updateAttractionDto) {
        return this.attractionModel.updateOne({ id }, { $set: { ...updateAttractionDto } });
    }
    remove(id) {
        return this.attractionModel.deleteOne({ id });
    }
};
exports.AttractionsService = AttractionsService;
exports.AttractionsService = AttractionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(attraction_entity_1.Attraction.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AttractionsService);
//# sourceMappingURL=attractions.service.js.map