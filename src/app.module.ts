import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { StoresModule } from './stores/stores.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, AuthModule, PrismaModule, StoresModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
