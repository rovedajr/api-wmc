import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateAdressDto } from './dto/update-adress.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async editUserAdress(userId: number, dto: UpdateAdressDto) {
    const adress = await this.prisma.address.update({
      where: { id: userId },
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
