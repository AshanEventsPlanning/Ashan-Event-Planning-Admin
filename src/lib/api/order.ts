import api from "./base";
import {GetOrderDTO,} from "@/server/application/common/dtos/order";
import {GetTableFormDTO} from "@/server/application/common/dtos/table";
import {staticClient} from "@/server/infrastructure/clients/sanity";
import {GetChairFormDTO} from "@/server/application/common/dtos/cloth";

export const getOrders = async () => {
  const res = await api.get(`/api/orders`);
  return Promise.all(GetOrderDTO.array().parse(await res.json()).map(async (order) => {
    let newOrder = {...order}
    newOrder.chair = await getChairById(newOrder.chair)
    newOrder.table = await getTableById(newOrder.table)
    return newOrder
  }));
};


export async function getChairById( chair: string) {
  const query = `*[_type=="chair" && _id=="${chair}"]{_id, name, length, width,price,stock, image}`;
  return GetChairFormDTO.array().parse(await staticClient.fetch(query))[0].name;
}

export async function getTableById( table: string) {
  const query = `*[_type=="table" && _id=="${table}"]{_id, name, length, width,price,stock, image}`;
  return GetTableFormDTO.array().parse(await staticClient.fetch(query))[0].name;
}