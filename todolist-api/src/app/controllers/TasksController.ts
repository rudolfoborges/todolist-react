import { Request, Response } from 'express';
import * as Yup from 'yup';
import Task from '../models/Task';
import { RequestWithUser } from '../lib/AuthenticateHandle';

class TasksController {
  async getAll(req: Request, res: Response): Promise<Response> {
    const tasks = await Task.find({
      order: { createdAt: 'DESC' },
    });

    return res.json(tasks);
  }

  // tasks/1 = idReq = 1
  async show(req: Request, res: Response): Promise<Response> {
    const { id: idReq } = req.params;
    const task = await Task.findOne({
      where: { id: idReq },
    });

    if (!task) {
      throw new Error();
    }

    return res.json(task);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const validateSchema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
    });

    if (!(await validateSchema.isValid(req.body))) {
      throw new Error();
    }

    const { title, description } = req.body;

    // const userId = (req as RequestWithUser).userId;
    const { userId } = req as RequestWithUser;

    const task = Task.create({
      title,
      description,
      userId,
    });
    await task.save();

    return res.json({
      message: 'Task gravada com sucesso',
      data: task,
    });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const task = await Task.findOne({
      where: { id },
    });

    if (!task) {
      throw new Error();
    }

    const { userId: userIdToken } = req as RequestWithUser;
    if (task.userId !== userIdToken) {
      throw new Error();
    }

    task.completedAt = new Date();
    await task.save();

    return res.json(task);
  }

  async remove(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const task = await Task.findOne({
      where: { id },
    });

    if (!task) {
      throw new Error();
    }

    const { userId: userIdToken } = req as RequestWithUser;
    if (task.userId !== userIdToken) {
      throw new Error();
    }

    await task.remove();
    return res.json({ message: 'Task deletada com sucesso' });
  }
}

export default new TasksController();
