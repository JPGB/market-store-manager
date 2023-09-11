import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from './../prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.removePassword([
      await this.prismaService.user.create({ data: createUserDto }),
    ]);
  }

  async findAll() {
    return this.removePassword(await this.prismaService.user.findMany());
  }

  async findOne(id: number) {
    return this.removePassword([
      await this.prismaService.user.findFirst({
        where: { id },
        include: { Store: true },
      }),
    ]);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.removePassword([
      await this.prismaService.user.update({
        where: { id },
        data: updateUserDto,
      }),
    ]);
  }

  async remove(id: number) {
    return this.removePassword([
      await this.prismaService.user.delete({ where: { id } }),
    ]);
  }

  private removePassword(users: User[]) {
    users = users.map((user) => {
      delete user.password;
      return user;
    });
    return users;
  }
}
