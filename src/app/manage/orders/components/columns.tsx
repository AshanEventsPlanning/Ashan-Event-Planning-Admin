"use client";

import { GetOrderDTO } from "@/server/application/common/dtos/order";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

export const columns: ColumnDef<z.infer<typeof GetOrderDTO>>[] = [

  {
    accessorKey: "chair",
    header: "Chair",
  },
  {
    accessorKey: "table",
    header: "Table",
  },
  {
    accessorKey: "noOfChairs",
    header: "Chair Count",
  },
  {
    accessorKey: "noOfCTables",
    header: "Table Count",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    accessorKey: "location",
    header: "Status",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
];
