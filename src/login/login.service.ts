// Arquivo: src/login/login.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient, Login, User } from '@prisma/client';
import prisma from '../prisma/prisma.service';

type LoginData = Omit<Login, 'id'>;

@Injectable()
export class LoginService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async create(data: LoginData) {
    return this.prisma.login.create({
      data,
    });
  }

  async findLoginByEmail(email: string) {
    return this.prisma.login.findFirst({
      where: { email }, // Usando o campo 'email' para buscar o login
    });
  }

  async findUserById(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async updateUserLastAccess(userId: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {},
    });
  }
}
