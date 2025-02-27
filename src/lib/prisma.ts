import { PrismaClient } from '@prisma/client';
import CONFIG from '../config/environment';

let prisma: PrismaClient;

declare const globalThis: {
  prisma: PrismaClient;
};

if (CONFIG.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }

  prisma = globalThis.prisma;
}

export default prisma;
