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
exports.DrinkService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const drink_schema_1 = require("./schema/drink.schema");
const vinelist_schema_1 = require("./schema/vinelist.schema");
let DrinkService = class DrinkService {
    constructor(drinkModel, vineListModel) {
        this.drinkModel = drinkModel;
        this.vineListModel = vineListModel;
    }
    async create(dto) {
        try {
            const vineListItem = await this.vineListModel.findById(dto.specification);
            const drink = await this.drinkModel.create(Object.assign(Object.assign({}, dto), { redactions: 0 }));
            vineListItem.drinks.push(drink.id);
            await vineListItem.save();
            return drink;
        }
        catch (e) {
            console.log(e);
        }
    }
    async createVineList(dto) {
        return await this.vineListModel.create(Object.assign(Object.assign({}, dto), { redactions: 0 }));
    }
    async getAll() {
        return this.vineListModel.find().populate('drinks');
    }
    async getOne(id) {
        return this.drinkModel.findById(id);
    }
    async delete(id) {
        return this.drinkModel.findByIdAndDelete(id);
    }
};
DrinkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(drink_schema_1.Drink.name)),
    __param(1, (0, mongoose_1.InjectModel)(vinelist_schema_1.VineList.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], DrinkService);
exports.DrinkService = DrinkService;
//# sourceMappingURL=drink.service.js.map