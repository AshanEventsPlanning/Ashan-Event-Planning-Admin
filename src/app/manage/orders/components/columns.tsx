"use client";

import { GetOrderDTO } from "@/server/application/common/dtos/order";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import EditAction from "@/app/manage/components/table/edit-action";
import Link from "next/link";
import api from "@/lib/api/base";
import {getOrderById, getOrders} from "@/lib/api/order";
import { useQuery } from "@tanstack/react-query";

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
    header: "Location",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "Manage",
    cell: ({row}) => {
      const order = row.original;

      return (
          order.status !== "Returned" && <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4"/>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem >
                  <Link className="text-orange-500 block w-full" href={`/manage/orders/${order.id}/return`}>
                    Return Items
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

      );
    },
  },
];
