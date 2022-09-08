import { Module } from '@nestjs/common';
import { AddressModule } from 'src/address/address.module';
import { AddressService } from 'src/address/address.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [AddressModule],
  controllers: [UserController],
  providers: [UserService, AddressService],
})
export class UserModule {}
