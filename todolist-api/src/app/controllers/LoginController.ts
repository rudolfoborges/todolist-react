import { Request, Response } from 'express';
import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import User from '../models/User';
import Session from '../models/Session';

interface TokenPayload {
  exp: number;
  userId: number;
  createdAt: Date;
}

class LoginController {
  async create(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      login: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      throw new Error();
    }

    const { login, password } = req.body;

    const user = await User.findOne({
      where: { login },
    });

    if (!user) {
      throw new Error();
    }

    if (!(await user.comparePassword(password))) {
      throw new Error();
    }
    const tokenPayload: TokenPayload = {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      userId: user.id,
      createdAt: new Date(),
    };

    const sign = promisify(jwt.sign);
    const token = (await sign(
      tokenPayload,
      'd41d8cd98f00b204e9800998ecf8427e',
    )) as string;

    const session = Session.create({
      token,
      userId: user.id,
    });

    await session.save();

    const { name } = user;

    return res.json({
      data: {
        user: { name, login },
        session,
      },
    });
  }
}

export default new LoginController();
