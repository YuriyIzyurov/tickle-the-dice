import { HydratedDocument } from 'mongoose';
import { Dish } from "src/dish/schema/dish.schema";
import * as mongoose from 'mongoose';
export type SpecificationDocument = HydratedDocument<Specification>;
export declare class Specification {
    name: string;
    dishes: Dish[];
}
export declare const SpecificationSchema: mongoose.Schema<Specification, mongoose.Model<Specification, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Specification>;
