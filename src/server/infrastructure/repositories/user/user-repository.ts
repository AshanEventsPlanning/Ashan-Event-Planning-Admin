import prisma from "@/server/infrastructure/clients/prisma";

export const getUsers = async ()=>{
    return prisma.user.findMany();
}