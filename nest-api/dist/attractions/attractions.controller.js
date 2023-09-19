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
exports.AttractionsController = void 0;
const common_1 = require("@nestjs/common");
const attractions_service_1 = require("./attractions.service");
const create_attraction_dto_1 = require("./dto/create-attraction.dto");
const update_attraction_dto_1 = require("./dto/update-attraction.dto");
let AttractionsController = class AttractionsController {
    constructor(attractionsService) {
        this.attractionsService = attractionsService;
    }
    create(createAttractionDto) {
        return this.attractionsService.create(createAttractionDto);
    }
    findAll() {
        return this.attractionsService.findAll();
    }
    findOne(id) {
        return this.attractionsService.findOne(+id);
    }
    update(id, updateAttractionDto) {
        return this.attractionsService.update(+id, updateAttractionDto);
    }
    remove(id) {
        return this.attractionsService.remove(+id);
    }
};
exports.AttractionsController = AttractionsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attraction_dto_1.CreateAttractionDto]),
    __metadata("design:returntype", void 0)
], AttractionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttractionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttractionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_attraction_dto_1.UpdateAttractionDto]),
    __metadata("design:returntype", void 0)
], AttractionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttractionsController.prototype, "remove", null);
exports.AttractionsController = AttractionsController = __decorate([
    (0, common_1.Controller)('attractions'),
    __metadata("design:paramtypes", [attractions_service_1.AttractionsService])
], AttractionsController);
//# sourceMappingURL=attractions.controller.js.map