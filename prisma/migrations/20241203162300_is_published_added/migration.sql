-- AlterTable
ALTER TABLE "Blogs" ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Brands" ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false;
