import {z} from "zod";

export const GetUserDTO = z.object({
    id:z.string(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    image_url: z.string(),
    user_id: z.string(),
});