import api from "@/lib/api/base";
import {GetUserDTO} from "@/server/application/common/dtos/user";

export const getUsers = async () => {
    const res = await api.get(`/api/users`);
    return GetUserDTO.array().parse(await res.json())
};