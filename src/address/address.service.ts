import { Injectable } from '@nestjs/common';
import { addresType } from '@prisma/client';
import { identity } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateAdressDto } from './dto/update-adress.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async editUserAdress(userId: number, dto: UpdateAdressDto) {
    const userAdress = await this.prisma.user.findFirst({
      where: { id: userId },
    });
    const adress = await this.prisma.address.update({
      where: { id: userAdress.id },
      data: {
        bairro: dto.bairro,
        cep: dto.cep,
        cidade: dto.cidade,
        tipo: dto.tipo,
        complemento: dto.complemento,
        logradouro: dto.logradouro,
        numero: dto.numero,
        uf: dto.uf,
      },
    });
    return adress;
  }
}
