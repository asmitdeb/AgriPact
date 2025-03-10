/*
  Warnings:

  - You are about to drop the column `buyerId` on the `Contract` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_buyerId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_contractId_fkey";

-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "buyerId";
