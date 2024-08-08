import {getOrders} from "@/server/infrastructure/repositories/order/order-repository";


export default async function getOrdersQueryHandler() {
    return getOrders();
}
