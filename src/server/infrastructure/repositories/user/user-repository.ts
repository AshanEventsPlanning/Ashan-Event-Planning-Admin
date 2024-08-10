import prisma from "@/server/infrastructure/clients/prisma";

export const getUsers = async ()=>{
    await prisma.$connect()
    const users = await prisma.user.findMany();
    await prisma.$disconnect()
    return users;
}