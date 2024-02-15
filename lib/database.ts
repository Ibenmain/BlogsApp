import { PrismaClient } from '@prisma/client'

// Declare a global variable named 'prisma' with type PrismaClient or undefined
declare global {
    var prisma: PrismaClient | undefined;
}

// Create a database client instance by assigning 'db' to the global.prisma variable if it exists, otherwise create a new instance of PrismaClient
export const db = global.prisma || new PrismaClient();