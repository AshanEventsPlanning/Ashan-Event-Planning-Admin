import {NextRequest} from "next/server";
 import {log} from "@/server/application/common/services/logging";
import lifeCycleErrorHandlingMiddleware from "@/server/api/middleware/lifecycle-error-handling-middleware";
import {getUsersQueryHandler} from "@/server/application/features/user/quaries/user-quary-handler";

export async function GET(request: NextRequest) {
    try {
        const users = await getUsersQueryHandler()

        return new Response(JSON.stringify(users), {
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