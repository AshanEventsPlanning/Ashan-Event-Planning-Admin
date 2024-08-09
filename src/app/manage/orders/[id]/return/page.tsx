"use client";

import React from 'react'
import {useQuery} from "@tanstack/react-query";
import {getOrderById} from "@/lib/api/order";
import Button from "@mui/material/Button";
import api from "@/lib/api/base";

type ReturnOrderPageProps = {
    params: { id: string }
};

type OrderType = {
    id: string,
    chair: any,
    table: any,
    noOfChairs: number,
    noOfCTables: number,
    totalPrice: number,
    location: string,
    date: string,
    time: string,
    userId: string,
    status:string
}

export default function ReturnPage({params: {id}}: ReturnOrderPageProps) {
    const {data: originalOrder, isLoading} = useQuery<OrderType>({
        queryKey: ["ORDER"],
        queryFn: () => getOrderById(id),
    });

    const returnOrder = async () => {

        try {
            // @ts-ignore
            let updatedChair = {...originalOrder?.chair};
            // @ts-ignore
            updatedChair.stock = originalOrder?.chair?.stock + originalOrder?.noOfChairs;

            // @ts-ignore
            let updatedTable = {...originalOrder?.table};
            // @ts-ignore
            updatedTable.stock = originalOrder?.table?.stock + originalOrder?.noOfCTables;
            await api.put(`/api/orders/${id}`,{})
            await api.put(`/api/chair/${originalOrder?.chair?._id}`, {json: updatedChair});
            await api.put(`/api/table/${originalOrder?.table?._id}`, {json: updatedTable});
        }catch (error){
            console.log("error:")
        }
    }

    return (
        <div style={{margin: '2rem'}}>
            <h2>Return Order</h2>

            {isLoading ? "Loading...." : <>
                <div className="flex" style={{margin: '1rem', marginTop: '2rem'}}>
                    <div style={{flex: 1, fontSize: '18px', fontWeight: 'bold'}}>Chair Info</div>
                    <div style={{flex: 1, fontSize: '18px', fontWeight: 'bold'}}>Table Info</div>
                </div>
                <div className="flex" style={{margin: '1rem', marginTop: '2rem'}}>
                    <div style={{flex: 1}}>{originalOrder?.chair?.name}:<span
                        style={{marginLeft: '1rem'}}>{originalOrder?.noOfChairs} </span></div>
                    <div style={{flex: 1}}>{originalOrder?.table?.name}:<span
                        style={{marginLeft: '1rem'}}>{originalOrder?.noOfCTables}</span></div>
                </div>
                <Button variant='outlined' style={{marginTop: '2rem'}} fullWidth onClick={returnOrder}>Return Items
                    to the Stock</Button></>}
        </div>
    )
}