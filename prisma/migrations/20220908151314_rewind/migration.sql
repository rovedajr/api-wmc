-- CreateEnum
CREATE TYPE "taxPayer" AS ENUM ('FISICA', 'JURIDICA');

-- CreateEnum
CREATE TYPE "addresType" AS ENUM ('RESIDENCIAL', 'COMERCIAL');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "identificador" VARCHAR(14) NOT NULL,
    "tipo" "taxPayer" NOT NULL DEFAULT 'FISICA',
    "aniversario" DATE NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT,
    "cidade" TEXT NOT NULL,
    "uf" VARCHAR(2) NOT NULL,
    "tipo" "addresType" NOT NULL,
    "cep" VARCHAR(9) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nome_key" ON "users"("nome");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
