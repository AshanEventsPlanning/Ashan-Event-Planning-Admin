import prisma from "../../clients/prisma";

export const getOrders = async () => {
  return prisma.order.findMany();
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
