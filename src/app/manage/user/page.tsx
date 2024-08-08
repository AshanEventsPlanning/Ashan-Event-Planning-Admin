"use client";
import React from 'react'
import {DataTable} from "@/app/manage/user/components/data-table";
import {columns} from "@/app/manage/user/components/columns";
import {useQuery} from "@tanstack/react-query";
import {getUsers} from "@/lib/api/user";


export default function UserPage() {
    const { data, isLoading } = useQuery({
        queryKey: ["USER"],
        queryFn: () => getUsers(),
    });
    console.log(data)
  return (
      <div>
        <h2 className="p-2">Users</h2>
        <div className={"p-4 grid grid-cols-1 gap-y-4"}>
          <div className="overflow-x-scroll ">
            {isLoading ? (
                "Loading..."
            ) : (
                <DataTable columns={columns} data={data!} />

            )}
          </div>
        </div>
      </div>
  )
}
