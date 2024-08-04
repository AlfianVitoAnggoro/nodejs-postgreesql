import { Router } from 'express';
import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/userController';

export const UserRouter: Router = Router();

UserRouter.get('/', getUsers);
UserRouter.get('/:id', getUser);
UserRouter.post('/', createUser);
UserRouter.put('/:id', updateUser);
UserRouter.delete('/:id', deleteUser);
