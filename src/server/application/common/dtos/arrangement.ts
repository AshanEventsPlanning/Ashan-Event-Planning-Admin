import { z } from "zod";

export const AddArrangementDTO = z
    .object({
        name: z.string().min(2).max(100),
        chairspertable: z.number().int().nonnegative(),
        status:z.string()
    })
    .strict();

export const GetArrangementFormDTO = z
    .object({
        _id: z.string(),
        name: z.string().min(2).max(100),
        chairspertable: z.number().int().nonnegative(),
        status:z.string()
    })

export const EditArrangementDTO = z
    .object({
        _id: z.string(),
        name: z.string().min(2).max(100),
        chairspertable: z.number().int().nonnegative(),
        status:z.string()
    })
    .strict();
