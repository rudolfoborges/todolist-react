import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

interface TokenPayload {
  userId: number;
}

export interface RequestWithUser extends Request {
  userId: number;
}

export async function authenticateHandle(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'Usuário precisa de uma token',
    });
  }

  // "bearer jkasndjkankdjnsdasdasd"
  // ['bearer', 'jkasndjkankdjn']
  const authSplit = authorization.split(' '); // Array
  const token = authSplit[1];

  if (!token) {
    return res.status(401).json({
      message: 'Usuário precisa de uma token',
    });
  }

  try {
    const verify = promisify(jwt.verify);
    const payload = (await verify(
      token,
      'd41d8cd98f00b204e9800998ecf8427e',
    )) as TokenPayload;

    (req as RequestWithUser).userId = payload.userId;

    return next();
  } catch (err) {
    return res.status(401).json({
      message: 'O token não é válido',
    });
  }
}
