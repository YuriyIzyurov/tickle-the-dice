import { Module } from '@nestjs/common';
import {DishModule} from "src/dish/dish.module";
import {MongooseModule} from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config';
import {DrinkModule} from "src/drink/drink.module";

@Module({
   imports: [
      ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}),
      MongooseModule.forRoot(process.env.DB_URI),
      DishModule,
      DrinkModule
   ],
})
export class AppModule {}

