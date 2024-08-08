"use client";

import { GetOrderDTO } from "@/server/application/common/dtos/order";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import {GetUserDTO} from "@/server/application/common/dtos/user";

export const columns: ColumnDef<z.infer<typeof GetUserDTO>>[] = [

  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  }
];
