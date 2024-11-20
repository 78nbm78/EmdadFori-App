/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumer]` on the table `Experts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mobile]` on the table `Experts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bankShebaNumber]` on the table `Experts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bankCardNumber]` on the table `Experts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstName` to the `Experts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Experts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Experts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `natianalCode` to the `Experts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumer` to the `Experts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionId` to the `Experts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_expertId_applicantId_email_idx";

-- AlterTable
ALTER TABLE "Experts" ADD COLUMN     "bankCardNumber" INTEGER,
ADD COLUMN     "bankShebaNumber" TEXT,
ADD COLUMN     "carGreenCardImage" TEXT,
ADD COLUMN     "carImage" TEXT,
ADD COLUMN     "carPersonalAndCarImage" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "homeAddress" TEXT,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "mobile" INTEGER NOT NULL,
ADD COLUMN     "natianalCode" TEXT NOT NULL,
ADD COLUMN     "nationalCardImage" TEXT,
ADD COLUMN     "phoneNumer" INTEGER NOT NULL,
ADD COLUMN     "postalCode" TEXT,
ADD COLUMN     "subscriptionId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Jobs" (
    "id" SERIAL NOT NULL,
    "expertId" INTEGER,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialReports" (
    "id" SERIAL NOT NULL,
    "expertId" INTEGER,

    CONSTRAINT "FinancialReports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscriptions" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "thumbnail" TEXT,
    "googleTitle" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brands" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "thumbnail" TEXT,
    "googleTitle" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT,

    CONSTRAINT "Brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blogs" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "googleTitle" TEXT,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "thumbnail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "score" INTEGER,
    "content" TEXT,
    "serviceId" INTEGER,
    "blogId" INTEGER,
    "brandId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "adminAnswer" TEXT,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Services_title_key" ON "Services"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Services_slug_key" ON "Services"("slug");

-- CreateIndex
CREATE INDEX "Services_slug_id_idx" ON "Services"("slug", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Brands_title_key" ON "Brands"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Brands_slug_key" ON "Brands"("slug");

-- CreateIndex
CREATE INDEX "Brands_slug_id_idx" ON "Brands"("slug", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Blogs_title_key" ON "Blogs"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Blogs_slug_key" ON "Blogs"("slug");

-- CreateIndex
CREATE INDEX "Blogs_slug_id_idx" ON "Blogs"("slug", "id");

-- CreateIndex
CREATE INDEX "Comments_blogId_brandId_serviceId_idx" ON "Comments"("blogId", "brandId", "serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "Experts_phoneNumer_key" ON "Experts"("phoneNumer");

-- CreateIndex
CREATE UNIQUE INDEX "Experts_mobile_key" ON "Experts"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Experts_bankShebaNumber_key" ON "Experts"("bankShebaNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Experts_bankCardNumber_key" ON "Experts"("bankCardNumber");

-- CreateIndex
CREATE INDEX "Users_expertId_applicantId_mobile_email_idx" ON "Users"("expertId", "applicantId", "mobile", "email");

-- AddForeignKey
ALTER TABLE "Experts" ADD CONSTRAINT "Experts_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscriptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "Experts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialReports" ADD CONSTRAINT "FinancialReports_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "Experts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blogs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;
