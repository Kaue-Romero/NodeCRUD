import { Request, Response } from 'express';
import { GetAllCategoriesService } from '../services/GetAllCategoriesService';

export class GetAllCategoriesController {
    public async handle(_request: Request, response: Response): Promise<Response> {
        const service = new GetAllCategoriesService();

        const categories = await service.execute();

        return response.json(categories);
    }
}