import {AddArrangementDTO} from "@/server/application/common/dtos/arrangement";
import {log} from "@/server/application/common/services/logging";
import {dynamicClient} from "@/server/infrastructure/clients/sanity";
import {z} from "zod";
import {createId} from "@paralleldrive/cuid2";

type AddArrangementCommand = z.infer<typeof AddArrangementDTO>;

export default async function createArrangementCommandHandler(
    command: AddArrangementCommand
) {
    const {name,chairspertable,status} = command;
    const arrangement = {
        _id:createId(),
        _type: "arrangement",
        name,
        chairspertable,
        status
    };
    const publishedCloth = await dynamicClient.create(arrangement);
}
