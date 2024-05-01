// login.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient, Login } from '@prisma/client';
import { CreateLoginDto, UpdateLoginDto } from './login.dto';
import prisma from '../prisma/prisma.service';
@Injectable()
export class LoginService {
  private readonly prisma: PrismaClient;  
  constructor() {
    this.prisma = prisma;
  }

  async create(data: CreateLoginDto): Promise<Login> {
    const { email, password, userId } = data;
    return this.prisma.login.create({
      data: { email, password, userId },
    });
  }

  async findAll(): Promise<Login[]> {
    return this.prisma.login.findMany();
  }

  async findById(id: string): Promise<Login | null> {
    return this.prisma.login.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: UpdateLoginDto): Promise<Login | null> {
    const { password } = data;
    return this.prisma.login.update({
      where: { id },
      data: { password },
    });
  }

  async delete(id: string): Promise<Login | null> {
    return this.prisma.login.delete({
      where: { id },
    });
  }

  async countDistinctUsersAccessedPlatform(): Promise<number> {
    const distinctUsers = await this.prisma.login.findMany({
      select: {
        userId: true,
      },
      distinct: ['userId'],
    });
    return distinctUsers.length;
  }
}
