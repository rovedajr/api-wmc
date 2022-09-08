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

// model User {
//   id             Int @id @default(autoincrement())
//   nome           String   @db.VarChar(150)
//   identificador  String @db.VarChar(14)
//   tipo           taxPayer @default(FISICA)
//   aniversario    DateTime @db.Date
//   endereco       Address[]
//   createdAt      DateTime @default(now()) @map("created_at")
//   updatedAt      DateTime @default(now()) @map("updated_at")
//   }
