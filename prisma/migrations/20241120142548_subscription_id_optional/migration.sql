-- DropForeignKey
ALTER TABLE "Experts" DROP CONSTRAINT "Experts_subscriptionId_fkey";

-- AlterTable
ALTER TABLE "Experts" ALTER COLUMN "subscriptionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Experts" ADD CONSTRAINT "Experts_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
