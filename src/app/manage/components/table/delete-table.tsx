"use client";

import {z} from "zod";
import Button from "@mui/material/Button";
import {useToast} from "@/components/ui/use-toast";
import {useQueryClient} from "@tanstack/react-query";
import {Table} from "@/server/application/common/dtos/schemas";
import {deleteTable} from "@/lib/api/table";

function DeleteTableAction({text, table }: {  text: string, table:  z.infer<typeof Table>  }) {
    const {toast} = useToast();
    const queryClient = useQueryClient();
    const handleDelete=async()=>{
        try{
            // @ts-ignore
            await deleteTable({_id: table._id, table: table})
            queryClient.invalidateQueries(["TABLE"]);
            toast({title: "Success", variant: "default"});
        }catch (error){
            toast({
                title: "Error",
                variant: "destructive",
                description: "Error while deleting table",
            });
        }
    }
    return (
        <Button size={"small"} color={"warning"} onClick={handleDelete}>
            {text}
        </Button>
    );
}

export default DeleteTableAction;
