import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { AddressService } from 'src/address/address.service';
import { UpdateAdressDto } from 'src/address/dto/update-adress.dto';
import { UserDto } from '../user/dto';
import { UpdateUSerDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private adressService: AddressService,
  ) {}

  @Post()
  create(@Body() dto: UserDto) {
    return this.userService.createUSer(dto);
  }

  @Get()
  findall() {
    return this.userService.findall();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUSerDto,
  ) {
    return this.userService.editUser(id, dto);
  }

  @Patch('/adress/:id')
  updateAdress(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAdressDto,
  ) {
    return this.adressService.editUserAdress(id, dto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
