import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

export class CreateVideoService {
    async execute({ name, description, duration, category_id }: VideoRequest): Promise<any | Error> {
        const repo = getRepository(Video as any);
        const repoCategory = getRepository(Category);

        if (!(await repoCategory.findOne(category_id))) {
            throw new Error("Category does not exist");
        }

        const video = repo.create({name, description, duration, category_id});

        await repo.save(video);

        return video;
    }
}