import { Address, taxPayer } from '@prisma/client';
import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  // field by field validation
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  identificador: string;

  @IsEnum(taxPayer)
  @IsNotEmpty()
  tipo: taxPayer;

  @IsDateString({ strict: true })
  @IsNotEmpty()
  aniversario: string;

  @IsNotEmpty()
  endereco: Address;
}
