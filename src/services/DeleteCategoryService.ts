import { DeleteResult, getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
    async execute(id: string): Promise<DeleteResult | Error> {
        const categoryRepository = getRepository(Category);

        const category = await categoryRepository.findOne(id);

        if (!category) {
            throw new Error("Category not found");
        }

        const result = await categoryRepository.delete(id);

        return result;
    }
}