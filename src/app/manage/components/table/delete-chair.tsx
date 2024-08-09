"use client";

import Link from "next/link";
import {deleteChair} from "@/lib/api/cloth";
import {EditChairDTO} from "@/server/application/common/dtos/cloth";
import {z} from "zod";
import Button from "@mui/material/Button";
import {useToast} from "@/components/ui/use-toast";
import {useQueryClient} from "@tanstack/react-query";
import {Chair} from "@/server/application/common/dtos/schemas";

function DeleteChairAction({text, chair }: {  text: string, chair:  z.infer<typeof Chair>  }) {
    const {toast} = useToast();
    const queryClient = useQueryClient();
    const handleDelete=async()=>{
        try{
            // @ts-ignore
            await deleteChair({_id: chair._id, chair: chair})
            queryClient.invalidateQueries(["CHAIR"]);
            toast({title: "Success", variant: "default"});
        }catch (error){
            toast({
                title: "Error",
                variant: "destructive",
                description: "Error while deleting chair",
            });
        }
    }
    return (
        <Button size={"small"} color={"warning"} onClick={handleDelete}>
            {text}
        </Button>
    );
}

export default DeleteChairAction;
