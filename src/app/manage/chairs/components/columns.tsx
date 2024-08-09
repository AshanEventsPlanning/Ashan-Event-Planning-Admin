"use client";

import {Chair} from "@/server/application/common/dtos/schemas";
import {ColumnDef} from "@tanstack/react-table";
import * as z from "zod";

import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {ArrowUpDown, MoreHorizontal} from "lucide-react";
import EditAction from "@/app/manage/components/table/edit-action";
import DeleteChairAction from "@/app/manage/components/table/delete-chair";

export const columns: ColumnDef<z.infer<typeof Chair>>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "length",
        header: "Length"
    },
    {
        accessorKey: "width",
        header: "Width"
    },
    {
        accessorKey: "price",
        header: "Price"
    },
    {
        accessorKey: "stock",
        header: "Stock"
    },
    {
        id: "actions",
        header: "Manage",
        cell: ({row}) => {
            const chair = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem><EditAction href={`/manage/chairs/${chair._id}/edit`}
                                                      text={"Edit"}/></DropdownMenuItem>
                        <DropdownMenuItem>
                            <DeleteChairAction  text={"Delete"} chair={chair}/>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
