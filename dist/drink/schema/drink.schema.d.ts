import { HydratedDocument } from 'mongoose';
import { Specification } from "src/dish/schema/specification.schema";
import * as mongoose from 'mongoose';
export type DrinkDocument = HydratedDocument<Drink>;
export type PriceType = {
    ml50: number;
    ml100: number;
    bottle: number;
};
export declare class Drink {
    name: string;
    description: string;
    price: PriceType;
    specification: Specification;
}
export declare const DrinkSchema: mongoose.Schema<Drink, mongoose.Model<Drink, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Drink>;
