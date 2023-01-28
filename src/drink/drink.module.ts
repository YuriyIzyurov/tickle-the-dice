import { Module } from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import { Drink, DrinkSchema } from "src/drink/schema/drink.schema";
import {VineList, VineListSchema} from "src/drink/schema/vinelist.schema";
import { DrinkController } from "./dish.controller";
import {DrinkService} from "src/drink/drink.service";


@Module({
    imports: [
        MongooseModule.forFeature([{name: Drink.name, schema: DrinkSchema}]),
        MongooseModule.forFeature([{name: VineList.name, schema: VineListSchema}]),
    ],
    controllers: [DrinkController],
    providers: [DrinkService]
})
export class DrinkModule {}