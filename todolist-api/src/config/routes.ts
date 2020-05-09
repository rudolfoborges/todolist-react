import { Router } from 'express';
import UsersController from '../app/controllers/UsersController';
import TasksController from '../app/controllers/TasksController';

const routes = Router();

routes.post('/login', () => {
  console.log('Login');
});

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

routes.get('/tasks', TasksController.index);
routes.get('/tasks/:id', TasksController.show);
routes.post('/tasks', TasksController.create);
routes.patch('/tasks/:id', TasksController.update);

export default routes;
