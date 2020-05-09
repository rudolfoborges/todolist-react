import { Request, Response } from 'express';

class UsersController {
  index(req: Request, res: Response): Response {
    return res.json({ msg: 'Teste' });
  }

  create(req: Request, res: Response): Response {
    const { body } = req;
    return res.status(201).json(body);
  }
}

export default new UsersController();
