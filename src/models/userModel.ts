import User from '@/types';
import prisma from '../lib/prisma';

const getUsersModel = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserModel = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
};

const createUserModel = async (data: User) => {
  try {
    const user = await prisma.user.create({
      data: data,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUserModel = async (id: string, data: User) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: data,
    });

    return user;
  } catch (error) {
    throw error;
  }
};

const deleteUserModel = async (id: string) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
};

export {
  getUsersModel,
  getUserModel,
  createUserModel,
  updateUserModel,
  deleteUserModel,
};
