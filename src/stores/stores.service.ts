import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class StoresService {
  constructor(private prismaService: PrismaService) {}

  async create(createStoreDto: CreateStoreDto) {
    return await this.prismaService.store.create({ data: createStoreDto });
  }

  async findAll() {
    return await this.prismaService.store.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.store.findFirst({
      where: { id },
      include: { user: true },
    });
  }

  async update(id: number, updateStoreDto: UpdateStoreDto) {
    return await this.prismaService.store.update({
      where: { id },
      data: updateStoreDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.store.delete({ where: { id } });
  }
}
