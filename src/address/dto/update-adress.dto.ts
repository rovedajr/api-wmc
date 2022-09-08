import { addresType } from '@prisma/client';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAdressDto {
  @IsOptional()
  @IsString()
  logradouro?: string;

  @IsOptional()
  @IsNumber()
  numero?: number;

  @IsOptional()
  @IsString()
  bairro?: string;

  @IsOptional()
  @IsString()
  complemento?: string;

  @IsOptional()
  @IsString()
  cidade?: string;

  @IsOptional()
  @IsString()
  uf?: string;

  @IsOptional()
  @IsEnum(addresType)
  tipo?: addresType;

  @IsOptional()
  @IsString()
  cep?: string;
}
