-- CreateEnum
CREATE TYPE "RoleEnums" AS ENUM ('ADMIN', 'EXPERT', 'APPLICANT');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "role" "RoleEnums" NOT NULL DEFAULT 'APPLICANT',
    "expertId" INTEGER,
    "applicantId" INTEGER,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experts" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Experts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Applicants" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Applicants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_expertId_key" ON "Users"("expertId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_applicantId_key" ON "Users"("applicantId");

-- CreateIndex
CREATE INDEX "Users_expertId_applicantId_email_idx" ON "Users"("expertId", "applicantId", "email");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "Experts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicants"("id") ON DELETE SET NULL ON UPDATE CASCADE;
