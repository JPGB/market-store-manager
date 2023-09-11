/*
  Warnings:

  - You are about to drop the column `userId` on the `store` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `store` DROP FOREIGN KEY `Store_userId_fkey`;

-- AlterTable
ALTER TABLE `store` DROP COLUMN `userId`;
