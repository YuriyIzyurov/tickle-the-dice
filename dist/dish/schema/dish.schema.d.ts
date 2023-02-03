import { HydratedDocument } from 'mongoose';
import { Specification } from "src/dish/schema/specification.schema";
import * as mongoose from 'mongoose';
export type DishDocument = HydratedDocument<Dish>;
export declare class Dish {
    name: string;
    description: string;
    price: number;
    specification: Specification;
}
export declare const DishSchema: mongoose.Schema<Dish, mongoose.Model<Dish, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Dish>;
