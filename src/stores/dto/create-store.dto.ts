import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Validate,
} from 'class-validator';
import { UserExistsRule } from 'src/users/decorators/user.decorator';

export class CreateStoreDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  @Validate(UserExistsRule)
  userId: number;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
