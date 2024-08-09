import lifeCycleErrorHandlingMiddleware from "@/server/api/middleware/lifecycle-error-handling-middleware";
import { log } from "@/server/application/common/services/logging";
import getOrdersQueryHandler from "@/server/application/features/order/queries/get-orders-query-handler";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const orders = await getOrdersQueryHandler();

    return new Response(JSON.stringify(orders), {
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
