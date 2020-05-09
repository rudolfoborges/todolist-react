import { Router } from 'express';
import UsersController from '../app/controllers/UsersController';
import TasksController from '../app/controllers/TasksController';
import LoginController from '../app/controllers/LoginController';
import { authenticateHandle } from '../app/lib/AuthenticateHandle';

const routes = Router();

routes.post('/login', LoginController.create);

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

routes.get('/tasks', TasksController.getAll);
routes.get('/tasks/:id', TasksController.show);

// Rotas usando login
routes.use(authenticateHandle);
routes.post('/tasks', TasksController.create);
routes.patch('/tasks/:id', TasksController.update);
routes.delete('/tasks/:id', TasksController.remove);

export default routes;
