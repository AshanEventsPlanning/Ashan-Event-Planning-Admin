import { z } from "zod";

export const GetOrderDTO = z.object({
  id: z.string(),
  chair: z.string(),
  table: z.string(),
  noOfChairs: z.number(),
  noOfCTables: z.number(),
  totalPrice: z.number(),
  location: z.string(),
  date: z.string(),
  time: z.string(),
  userId: z.string(),
  status:z.string()
});
