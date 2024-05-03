import { z } from "zod";
import prisma from "../../clients/prisma";
import {
  DeliveryStatusFieldDTO,
  OrderStatusFieldDTO,
  PaymentStatusFieldDTO,
} from "@/server/application/common/dtos/order";
import { OrderFilters } from "@/server/application/common/dtos/order";

// type GetOrdersParams = z.infer<typeof OrderFilters>;

export const getOrders = async () => {
  const orders = await prisma.order.findMany();
  console.log(orders)
  return orders
};

