import User from '@/types';
import {
  createUserModel,
  getUserModel,
  getUsersModel,
  updateUserModel,
  deleteUserModel,
} from '../models/userModel';
import { Request, Response } from 'express';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users: any = await getUsersModel();
    return res.status(200).send({ status: true, statusCode: 200, data: users });
  } catch (error) {
    return res.status(400).send({ status: false, message: error, data: null });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    if (!id) {
      return res
        .status(400)
        .send({ status: false, message: 'ID is required', data: null });
    }

    const user = await getUserModel(id);

    if (!user) {
      return res
        .status(404)
        .send({ status: false, message: 'User not found', data: null });
    }

    return res.status(200).send({
      status: true,
      message: 'User retrieved successfully',
      data: user,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, message: (error as Error).message, data: null });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const data: User = req.body;
    const user = await createUserModel(data);
    return res.status(200).send({ status: true, statusCode: 200, data: user });
  } catch (error) {
    return res.status(400).send({ status: false, message: error, data: null });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const data: User = req.body;

    if (!id) {
      return res
        .status(400)
        .send({ status: false, message: 'ID is required', data: null });
    }

    const user = await updateUserModel(id, data);
    return res.status(200).send({
      status: true,
      message: 'User retrieved successfully',
      data: user,
    });
  } catch (error) {
    return res.status(400).send({ status: false, message: error, data: null });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const user = await deleteUserModel(id);
    return res.status(200).send({
      status: true,
      message: 'User deleted successfully',
      data: user,
    });
  } catch (error) {
    return res.status(400).send({ status: false, message: error, data: null });
  }
};
