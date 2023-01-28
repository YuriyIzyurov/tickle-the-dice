import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Dish, DishDocument} from "src/dish/schema/dish.schema";
import {Specification, SpecificationDocument} from "src/dish/schema/specification.schema";
import {CreateDishDto} from "src/dish/dto/create-dish.dto";
import {CreateSpecificationDto} from "src/dish/dto/create-specification.dto";


@Injectable()
export class DishService {
    constructor(@InjectModel(Dish.name) private dishModel: Model<DishDocument>,
                @InjectModel(Specification.name) private specificationModel: Model<SpecificationDocument>) {}

    async create(dto: CreateDishDto): Promise<Dish> {
        const specification = await this.specificationModel.findById(dto.specification)
        const dish =  await this.dishModel.create({...dto, redactions: 0})
        specification.dishes.push(dish.id)
        await specification.save()
        return dish
    }
    async createSpecification(dto: CreateSpecificationDto): Promise<Specification> {
        return await this.specificationModel.create({...dto, redactions: 0})
    }
    async getAll(): Promise<Dish[]> {
        const dishes = await this.dishModel.find()
        return dishes
    }
    async getOne(id: ObjectId): Promise<Dish> {
        const dish = await this.dishModel.findById(id)
        return dish
    }
    async delete(id: ObjectId): Promise<Dish> {
        const dish = await this.dishModel.findByIdAndDelete(id)
        return dish
    }
}