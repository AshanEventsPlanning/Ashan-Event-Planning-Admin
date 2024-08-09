import {z} from "zod";

export const AddChairDTO = z
    .object({
        name: z.string().min(2).max(100),
        length: z.number().int().nonnegative(),
        width: z.number().int().nonnegative(),
        price: z.number().int().nonnegative(),
        stock: z.number().int().nonnegative(),
        status: z.string(),
        image: z.string().array().nonempty({message: "Please upload at least 1 image"}),
    })
    .strict();

export const GetChairFormDTO = z
    .object({
        _id: z.string(),
        name: z.string().min(2).max(100),
        length: z.number().int().nonnegative(),
        width: z.number().int().nonnegative(),
            price: z.any(),
            stock: z.any(),
            status: z.any(),
        image: z.string().array().nonempty({message: "Please upload at least 1 image"}),
    })

export const EditChairDTO = z
    .object({
        _id: z.string(),
        name: z.string().min(2).max(100),
        length: z.number().int().nonnegative(),
        width: z.number().int().nonnegative(),
        price: z.number().int().nonnegative(),
        stock: z.number().int().nonnegative(),
        status: z.string(),
        image: z.string().array().nonempty({message: "Please upload at least 1 image"}),
    })
    .strict();
