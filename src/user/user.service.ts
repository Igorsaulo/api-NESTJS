import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { PrismaService } from '../prisma/prisma.service';
import { User as TableUser, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(user: User) {
    try {
      user.password = await bcrypt.hashSync(user.password, 12);
      await this.prisma.user.create({ data: user });
      return { message: 'User created successfully' };
    }catch (error) {
      console.log(error);
      return { message: 'Error creating user' };
    }
  }
  async findOne(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }
  async delete(id: number) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return { message: 'User deleted successfully' };
    } catch (error) {
      console.log(error);
      return { message: 'Error deleting user' };
    }
  }
}