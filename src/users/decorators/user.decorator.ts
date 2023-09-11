import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';

@ValidatorConstraint({ name: 'UserExists', async: true })
@Injectable()
export class UserExistsRule implements ValidatorConstraintInterface {
  constructor(private prismaService: PrismaService) {}

  async validate(id: number) {
    console.warn(id);

    try {
      // console.warn(this.prismaService);

      await this.prismaService.user.findFirstOrThrow({ where: { id } });
    } catch (e) {
      console.warn(e);

      return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `User doesn't exist`;
  }
}
