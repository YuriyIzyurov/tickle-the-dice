import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Drink } from "src/drink/schema/drink.schema";
export type VineListDocument = HydratedDocument<VineList>;
export declare class VineList {
    name: string;
    drinks: Drink[];
}
export declare const VineListSchema: mongoose.Schema<VineList, mongoose.Model<VineList, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, VineList>;
