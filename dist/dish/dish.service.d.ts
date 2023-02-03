import { Model, ObjectId } from "mongoose";
import { Dish, DishDocument } from "src/dish/schema/dish.schema";
import { Specification, SpecificationDocument } from "src/dish/schema/specification.schema";
import { CreateDishDto } from "src/dish/dto/create-dish.dto";
import { CreateSpecificationDto } from "src/dish/dto/create-specification.dto";
export declare class DishService {
    private dishModel;
    private specificationModel;
    constructor(dishModel: Model<DishDocument>, specificationModel: Model<SpecificationDocument>);
    create(dto: CreateDishDto): Promise<Dish>;
    createSpecification(dto: CreateSpecificationDto): Promise<Specification>;
    getAll(): Promise<Specification[]>;
    getOne(id: ObjectId): Promise<Dish>;
    delete(id: ObjectId): Promise<ObjectId>;
}
