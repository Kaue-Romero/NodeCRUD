import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateVideoController } from './controllers/CreateVideoController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';

const routes = Router();

// Routes for categories
routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

// Routes for videos
routes.post("/videos", new CreateVideoController().handle);

export { routes };