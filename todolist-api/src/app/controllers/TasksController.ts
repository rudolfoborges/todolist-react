import {Request, Response} from 'express';

class TasksController {

  index(req: Request, res:Response): Response {
    return res.json();
  }

  show(req: Request, res:Response): Response {
    return res.json();
  }

  create(req: Request, res:Response): Response {
    return res.json();
  }

  update(req: Request, res:Response): Response {
    return res.json();
  }

}

export default new TasksController();