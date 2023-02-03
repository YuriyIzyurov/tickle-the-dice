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
exports.DrinkController = void 0;
const common_1 = require("@nestjs/common");
const create_drink_dto_1 = require("./dto/create-drink.dto");
const create_vinelist_dto_1 = require("./dto/create-vinelist.dto");
const drink_service_1 = require("./drink.service");
let DrinkController = class DrinkController {
    constructor(drinkService) {
        this.drinkService = drinkService;
    }
    create(dto) {
        return this.drinkService.create(dto);
    }
    createSpecification(dto) {
        return this.drinkService.createVineList(dto);
    }
    getAll() {
        return this.drinkService.getAll();
    }
    getOne(id) {
        return this.drinkService.getOne(id);
    }
    delete(id) {
        return this.drinkService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_drink_dto_1.CreateDrinkDto]),
    __metadata("design:returntype", void 0)
], DrinkController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':vinelist'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vinelist_dto_1.CreateVineListDto]),
    __metadata("design:returntype", void 0)
], DrinkController.prototype, "createSpecification", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DrinkController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DrinkController.prototype, "getOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DrinkController.prototype, "delete", null);
DrinkController = __decorate([
    (0, common_1.Controller)('/drinks'),
    __metadata("design:paramtypes", [drink_service_1.DrinkService])
], DrinkController);
exports.DrinkController = DrinkController;
//# sourceMappingURL=drink.controller.js.map