import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ required: false, default: true })
  isActive: boolean;

  @ApiProperty({ required: false, default: false })
  isAdministrator: boolean;
}
