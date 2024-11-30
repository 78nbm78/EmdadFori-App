-- CreateEnum
CREATE TYPE "JobEnums" AS ENUM ('DONE', 'DOING', 'PENDING', 'FAILED');

-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "jobStatus" "JobEnums" NOT NULL DEFAULT 'PENDING';
