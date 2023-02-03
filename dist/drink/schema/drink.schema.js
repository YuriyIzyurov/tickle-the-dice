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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrinkSchema = exports.Drink = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const specification_schema_1 = require("../../dish/schema/specification.schema");
const mongoose = require("mongoose");
let Drink = class Drink {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Drink.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Drink.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: { ml50: Number, ml100: Number, bottle: Number } }),
    __metadata("design:type", Object)
], Drink.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Specification' }),
    __metadata("design:type", specification_schema_1.Specification)
], Drink.prototype, "specification", void 0);
Drink = __decorate([
    (0, mongoose_1.Schema)()
], Drink);
exports.Drink = Drink;
exports.DrinkSchema = mongoose_1.SchemaFactory.createForClass(Drink);
//# sourceMappingURL=drink.schema.js.map