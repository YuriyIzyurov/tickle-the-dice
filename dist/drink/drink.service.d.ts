import { Model, ObjectId } from "mongoose";
import { Drink, DrinkDocument } from "./schema/drink.schema";
import { VineList, VineListDocument } from "src/drink/schema/vinelist.schema";
import { CreateDrinkDto } from "./dto/create-drink.dto";
import { CreateVineListDto } from "src/drink/dto/create-vinelist.dto";
export declare class DrinkService {
    private drinkModel;
    private vineListModel;
    constructor(drinkModel: Model<DrinkDocument>, vineListModel: Model<VineListDocument>);
    create(dto: CreateDrinkDto): Promise<Drink>;
    createVineList(dto: CreateVineListDto): Promise<VineList>;
    getAll(): Promise<VineList[]>;
    getOne(id: ObjectId): Promise<Drink>;
    delete(id: ObjectId): Promise<Drink>;
}
