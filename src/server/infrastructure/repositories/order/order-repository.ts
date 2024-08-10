import prisma from "../../clients/prisma";

export const getOrders = async () => {
  await prisma.$connect()
  const orders = await prisma.order.findMany();
  await prisma.$disconnect()
  return orders;
};

export const updateOrderStatus = async (id: string, status: string) => {
  try {
    return await prisma.order.update({
      where: {id},
      data: {status},
    });
  } catch (error) {
    console.error("Error updating order status: ", error);
    throw new Error("Failed to update order status");
  }
};
