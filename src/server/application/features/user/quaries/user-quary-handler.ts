import {getUsers} from "@/server/infrastructure/repositories/user/user-repository";

export async function getUsersQueryHandler(){
    return  getUsers();
}