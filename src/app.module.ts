import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, AddressModule, PrismaModule],
})
export class AppModule {}
