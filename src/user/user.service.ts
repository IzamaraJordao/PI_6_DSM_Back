// Arquivo: src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import prisma from '../prisma/prisma.service';

@Injectable()
export class UserService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return this.prisma.user.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
