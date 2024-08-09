import {log} from "@/server/application/common/services/logging";
import lifeCycleErrorHandlingMiddleware from "@/server/api/middleware/lifecycle-error-handling-middleware";
import {updateOrderStatus} from "@/server/infrastructure/repositories/order/order-repository";
import {NextRequest} from "next/server";

export async function PUT(request: NextRequest,{params: {id}}: { params: { id: string } }) {
    try {
        await updateOrderStatus(id,"Returned");

        return new Response("Successfully Updated", {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        log("SEVERE", error);
        return lifeCycleErrorHandlingMiddleware(error as Error);
    }
}