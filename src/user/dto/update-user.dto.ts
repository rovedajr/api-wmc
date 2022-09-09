import { ApiProperty } from '@nestjs/swagger';
import { Address, taxPayer } from '@prisma/client';
import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateUSerDto {
  @ApiProperty({ example: 'Ricardo Almeida' })
  @IsString()
  @IsOptional()
  nome?: string;

  @ApiProperty({ example: '28394059485' })
  @IsString()
  @IsOptional()
  identificador?: string;

  @IsEnum(taxPayer)
  @IsOptional()
  @ApiProperty({
    description: 'Tipo de entidade',
    enum: ['FISICA', 'JURIDICA'],
  })
  tipo?: taxPayer;

  @IsDateString()
  @IsOptional()
  @ApiProperty({ example: '1984-09-01' })
  aniversario?: string;
}
