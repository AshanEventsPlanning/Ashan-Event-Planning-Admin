import {EditChairDTO} from "@/server/application/common/dtos/cloth";
import {dynamicClient} from "@/server/infrastructure/clients/sanity";
import {z} from "zod";

type EditChairCommand = z.infer<typeof EditChairDTO>;

export default async function editChairCommandHandler(
    command: EditChairCommand
) {
    const {_id, name, length, width, price, stock, image} = command;
    const chair = {
        _id,
        _type: "chair",
        name,
        length,
        width, price, stock,

        image
    };
    const publishedCloth = await dynamicClient.createOrReplace(chair);
}
