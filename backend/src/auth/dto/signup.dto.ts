import { PickType } from '@nestjs/swagger';

import { CreateUserDto } from '../../users/dto/create-user.dto';

export class SignUpDto extends PickType(CreateUserDto, [
  'username',
  'about',
  'avatar',
  'email',
  'password',
]) {}
