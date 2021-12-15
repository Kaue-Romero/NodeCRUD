import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class UpdateCategoryService {
    async execute({id, name, description}: CategoryUpdateRequest): Promise<Category | Error> {
        const categoryRepository = getRepository(Category);

        const category = await categoryRepository.findOne(id);

        if (!category) {
            throw new Error("Category not found");
        }

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await categoryRepository.save(category);

        return category;
    }
}