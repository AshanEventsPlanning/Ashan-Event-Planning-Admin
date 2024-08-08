import prisma from "../../clients/prisma";

// type GetOrdersParams = z.infer<typeof OrderFilters>;

export const getOrders = async () => {
  return prisma.order.findMany();
};

