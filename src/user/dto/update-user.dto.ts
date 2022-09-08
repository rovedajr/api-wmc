import { Address, taxPayer } from '@prisma/client';
import { IsDateString, IsEnum, IsOptional } from 'class-validator';

export class UpdateUSerDto {
  @IsOptional()
  nome?: string;

  @IsOptional()
  identificador?: string;

  @IsEnum(taxPayer)
  @IsOptional()
  tipo?: taxPayer;

  @IsDateString({ strict: true })
  @IsOptional()
  aniversario?: string;

  @IsOptional()
  endereco: Address;
}
