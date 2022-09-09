import { ApiProperty } from '@nestjs/swagger';
import { Address, taxPayer } from '@prisma/client';
import { IsDateString, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({ example: 'Ricardo Almeida' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '28394059485' })
  identificador: string;

  @IsEnum(taxPayer)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Tipo de entidade',
    enum: ['FISICA', 'JURIDICA'],
  })
  tipo: taxPayer;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({ example: '1984-09-01' })
  aniversario: string;

  @IsNotEmpty()
  @ApiProperty({
    example:
      '[{"logradouro":"Rua Da Liberdade","numero":300,"bairro":"Palmeirinhas","cidade":"Campo Alegre","uf":"ES","tipo":"RESIDENCIAL" "cep":"34543000"}]',
  })
  endereco: Address[];
}
