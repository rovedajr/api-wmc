import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from '../user/dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() dto: UserDto) {
    console.log({ dto });

    return this.userService.createUSer(dto);
  }

  @Get()
  findall() {
    return this.userService.findall();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
