import { NextResponse } from "next/server"
import { auth } from '@clerk/nextjs';

import prismadb from "@/lib/prismadb"

export async function GET (
    { params }: { params: { account: string } }
) {
    try {
        const { userId } = auth();
        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        if (!params.account) {
            return new NextResponse("Account Name is required", { status: 400 });
        }

        const accnt_details = await prismadb.aWSAccountSchema.findUnique({
            where: {
                AccountName: params.account
            }
        })
        return NextResponse.json(JSON.stringify(accnt_details));
    } catch (error) {
        if (error.code === 'P5003') {
            return new NextResponse("Failed - Not Found", { status: 404 });
        }
        else {
            return new NextResponse("Internal Server Error", { status: 500 });
        }
    }
}
