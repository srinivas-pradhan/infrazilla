import { NextResponse } from "next/server"
import { auth } from '@clerk/nextjs';

import prismadb from "@/lib/prismadb"

export async function GET (
    req: Request,
    context: any
) {
    const { params } = context;

    //return NextResponse.json({ hello: params.account_name });
    try {
        const { userId } = auth();
        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        if (!params.account_name) {
            return new NextResponse("Account Name is required", { status: 400 });
        }

        const accnt_details = await prismadb.aWSAccountSchema.findUnique({
            where: {
                AccountName: params.account_name
            },
            select: {
                AccountName: true,
                AccountNumber: true,
                KMSKey: true,
                IAMRole: true,
                SupportedRegions: true
            }
        })
        if (!accnt_details?.KMSKey){
            accnt_details.KMSOnboard = "NO"
        }
        accnt_details.RegionsCount = accnt_details?.SupportedRegions.length
        return NextResponse.json(accnt_details);
    } catch (error) {
        
        if (error.code === 'P5003') {
            return new NextResponse("Failed - Not Found", { status: 404 });
        }
        else {
            return new NextResponse("Internal Server Error", { status: 500 });
        }
    }
}
