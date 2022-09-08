import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from '../user/dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: UserDto) {
    // gen password hash
    // const hash = await argon.hash(dto.password);

    const user = await this.prisma.user.create({
      data: {
        nome: dto.nome,
        identificador: dto.identificador,
        tipo: dto.tipo,
        aniversario: dto.aniversario,
      },
    });

    //save user

    //return user saved
    return { msg: 'I have signed up' };
  }

  signin() {
    return { msg: 'I have signed in' };
  }
}
