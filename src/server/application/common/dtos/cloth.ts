import { z } from "zod";

export const AddProductDTO = z
    .object({
        name: z.string().min(2).max(100),
        length: z.number().int().nonnegative(),
        width: z.number().int().nonnegative(),
        image: z.string().array().nonempty({ message: "Please upload at least 1 image" }),
    })
    .strict();

export const GetClothFormDTO = z
    .object({
        _id: z.string(),
        name: z.string().min(2).max(100),
        length: z.number().int().nonnegative(),
        width: z.number().int().nonnegative(),
        image: z.string().array().nonempty({ message: "Please upload at least 1 image" }),
    })

export const EditProductDTO = z
    .object({
        _id: z.string(),
        name: z.string().min(2).max(100),
        length: z.number().int().nonnegative(),
        width: z.number().int().nonnegative(),
        image: z.string().array().nonempty({ message: "Please upload at least 1 image" }),
    })
    .strict();
