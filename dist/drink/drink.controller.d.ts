import { ObjectId } from "mongoose";
import { CreateDrinkDto } from "./dto/create-drink.dto";
import { CreateVineListDto } from "src/drink/dto/create-vinelist.dto";
import { DrinkService } from "src/drink/drink.service";
export declare class DrinkController {
    private drinkService;
    constructor(drinkService: DrinkService);
    create(dto: CreateDrinkDto): Promise<import("./schema/drink.schema").Drink>;
    createSpecification(dto: CreateVineListDto): Promise<import("./schema/vinelist.schema").VineList>;
    getAll(): Promise<import("./schema/vinelist.schema").VineList[]>;
    getOne(id: ObjectId): Promise<import("./schema/drink.schema").Drink>;
    delete(id: ObjectId): Promise<import("./schema/drink.schema").Drink>;
}
