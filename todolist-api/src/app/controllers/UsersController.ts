import { Request, Response } from 'express';
import * as Yup from 'yup';
import User from '../models/User';

class UsersController {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();
    return res.json(users);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      login: Yup.string().required().min(2),
      password: Yup.string().required().min(8),
    });

    if (!(await schema.isValid(req.body))) {
      throw new Error('Todos os campos são obrigatórios');
    }

    // const {name, login, password} = req.body;
    const userExists = await User.findOne({
      where: { login: req.body.login },
    });

    if (userExists) {
      throw new Error('Informe um login diferente');
    }

    const user = User.create({
      name: req.body.name,
      login: req.body.login,
      password: req.body.password,
    });

    await user.save();

    return res.status(201).json({
      message: 'Usuário criado com sucesso',
      data: user,
    });
  }
}

export default new UsersController();
