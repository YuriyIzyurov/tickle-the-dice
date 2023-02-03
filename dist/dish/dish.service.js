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
exports.DishService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dish_schema_1 = require("./schema/dish.schema");
const specification_schema_1 = require("./schema/specification.schema");
let DishService = class DishService {
    constructor(dishModel, specificationModel) {
        this.dishModel = dishModel;
        this.specificationModel = specificationModel;
    }
    async create(dto) {
        const specification = await this.specificationModel.findById(dto.specification);
        const dish = await this.dishModel.create(Object.assign(Object.assign({}, dto), { redactions: 0 }));
        specification.dishes.push(dish.id);
        await specification.save();
        return dish;
    }
    async createSpecification(dto) {
        return await this.specificationModel.create(Object.assign(Object.assign({}, dto), { redactions: 0 }));
    }
    async getAll() {
        return this.specificationModel.find().populate('dishes');
    }
    async getOne(id) {
        return this.dishModel.findById(id);
    }
    async delete(id) {
        const dish = await this.dishModel.findByIdAndDelete(id);
        return dish.id;
    }
};
DishService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(dish_schema_1.Dish.name)),
    __param(1, (0, mongoose_1.InjectModel)(specification_schema_1.Specification.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], DishService);
exports.DishService = DishService;
//# sourceMappingURL=dish.service.js.map