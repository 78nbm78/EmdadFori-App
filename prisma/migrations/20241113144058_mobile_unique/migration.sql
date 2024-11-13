/*
  Warnings:

  - A unique constraint covering the columns `[mobile]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users_mobile_key" ON "Users"("mobile");
