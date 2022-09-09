import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';
import { UpdateUSerDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async createUSer(dto: UserDto) {
    const dataAniversario = new Date(dto.aniversario);
    if (dataAniversario >= new Date()) {
      throw new ForbiddenException(
        '"Aniversário" cannot be greater than the current date',
      );
    }

    const user = await this.prisma.user.create({
      data: {
        nome: dto.nome,
        identificador: dto.identificador,
        tipo: dto.tipo,
        aniversario: new Date(dto.aniversario),
      },
      select: {
        id: true,
      },
    });

    dto.endereco.map((endereco) => this.createUserAddress(user.id, endereco));

    return user;
  }
  catch(error) {
    if (error instanceof PrismaClientKnownRequestError) {
      throw new ForbiddenException('User already registered');
    }
  }

  async findall() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        nome: true,
        identificador: true,
        tipo: true,
        aniversario: true,
        endereco: true,
      },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        identificador: true,
        tipo: true,
        aniversario: true,
        endereco: true,
      },
    });

    return user;
  }

  async createUserAddress(id, endereco) {
    const userAddress = await this.prisma.address.create({
      data: {
        bairro: endereco.bairro,
        cep: endereco.cep,
        cidade: endereco.cidade,
        logradouro: endereco.logradouro,
        numero: endereco.numero,
        tipo: endereco.tipo,
        uf: endereco.uf,
        userId: id,
      },
    });

    return userAddress;
  }

  async editUser(id: number, dto: UpdateUSerDto) {
    const user = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        nome: dto.nome,
        identificador: dto.identificador,
        tipo: dto.tipo,
        aniversario: new Date(dto.aniversario),
      },
    });
    return user;
  }

  async deleteUser(id): Promise<User> {
    return await this.prisma.user.delete({
      where: { id: id },
    });
  }
}
