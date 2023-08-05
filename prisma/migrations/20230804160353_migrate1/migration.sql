-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER,
    "dateAmount" TIMESTAMP(3),
    "dateOfBirth" TIMESTAMP(3),
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "auto" TEXT,
    "passport" TEXT,
    "oms" TEXT,
    "contract" TEXT,
    "info" TEXT,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "specialization" TEXT,
    "phone1" TEXT,
    "phone2" TEXT,
    "email" TEXT,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);
