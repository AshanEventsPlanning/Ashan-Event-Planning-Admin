import {EditProductDTO} from "@/server/application/common/dtos/cloth";
import {log} from "@/server/application/common/services/logging";
import {dynamicClient} from "@/server/infrastructure/clients/sanity";
import {z} from "zod";
import {createId} from "@paralleldrive/cuid2";

type EditProductCommand = z.infer<typeof EditProductDTO>;

export default async function editProductCommandHandler(
    command: EditProductCommand
) {
    const {_id,name,length, width, image} = command;
    const chair = {
        _id,
        _type: "chair",
        name,
        length,
        width,
        image
    };
    const publishedCloth = await dynamicClient.createOrReplace(chair);
}
