"use client";

import {z} from "zod";
import Button from "@mui/material/Button";
import {useToast} from "@/components/ui/use-toast";
import {useQueryClient} from "@tanstack/react-query";
import {Arrangement} from "@/server/application/common/dtos/schemas";
import {deleteArrangement} from "@/lib/api/arrangement";

function DeleteArrangementAction({text, arrangement }: {  text: string, arrangement:  z.infer<typeof Arrangement>  }) {
    const {toast} = useToast();
    const queryClient = useQueryClient();
    const handleDelete=async()=>{
        try{
            // @ts-ignore
            await deleteArrangement({_id: arrangement._id, arrangement: arrangement})
            queryClient.invalidateQueries(["ARRANGEMENT"]);
            toast({title: "Success", variant: "default"});
        }catch (error){
            toast({
                title: "Error",
                variant: "destructive",
                description: "Error while deleting arrangement",
            });
        }
    }
    return (
        <Button size={"small"} color={"warning"} onClick={handleDelete}>
            {text}
        </Button>
    );
}

export default DeleteArrangementAction;
