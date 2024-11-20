/*
  Warnings:

  - You are about to drop the column `email` on the `Experts` table. All the data in the column will be lost.
  - You are about to drop the column `mobile` on the `Experts` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Experts_mobile_key";

-- AlterTable
ALTER TABLE "Experts" DROP COLUMN "email",
DROP COLUMN "mobile";
