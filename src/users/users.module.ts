import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserExistsRule } from './decorators/user.decorator';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserExistsRule],
  imports: [PrismaModule],
  exports: [UsersService],
})
export class UsersModule {}
