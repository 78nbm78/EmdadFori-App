/*
  Warnings:

  - A unique constraint covering the columns `[assistantId]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "RoleEnums" ADD VALUE 'ASSISTANT';

-- DropIndex
DROP INDEX "Users_expertId_applicantId_mobile_email_idx";

-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "assistantId" INTEGER;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "assistantId" INTEGER;

-- CreateTable
CREATE TABLE "Assistants" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Assistants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_assistantId_key" ON "Users"("assistantId");

-- CreateIndex
CREATE INDEX "Users_expertId_applicantId_assistantId_mobile_email_idx" ON "Users"("expertId", "applicantId", "assistantId", "mobile", "email");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_assistantId_fkey" FOREIGN KEY ("assistantId") REFERENCES "Assistants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_assistantId_fkey" FOREIGN KEY ("assistantId") REFERENCES "Assistants"("id") ON DELETE SET NULL ON UPDATE CASCADE;
