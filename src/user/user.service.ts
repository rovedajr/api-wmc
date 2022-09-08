import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async createUSer(dto: UserDto) {
    try {
      const user = await this.prisma.user.create({
        data: {
          nome: dto.nome,
          identificador: dto.identificador,
          tipo: dto.tipo,
          aniversario: dto.aniversario,
        },
        select: {
          id: true,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('User already registered');
      }
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

  async findOne(id) {
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
}
