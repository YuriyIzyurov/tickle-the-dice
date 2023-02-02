import { Module } from '@nestjs/common';
import {DishModule} from "src/dish/dish.module";
import {MongooseModule} from "@nestjs/mongoose";
import {DrinkModule} from "src/drink/drink.module";

@Module({
   imports: [
      MongooseModule.forRoot('mongodb+srv://batm1x:bmDxd68y3kNaiPh@cluster0.mkweogl.mongodb.net/Cafe?retryWrites=true&w=majority'),
      DishModule,
      DrinkModule
   ]
})
export class AppModule {}
