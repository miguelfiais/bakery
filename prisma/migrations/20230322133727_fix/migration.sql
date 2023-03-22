/*
  Warnings:

  - Made the column `admin` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "admin" SET NOT NULL,
ALTER COLUMN "admin" SET DEFAULT false;
