import { NextResponse } from "next/server"
import { auth } from '@clerk/nextjs';

import prismadb from "@/lib/prismadb"

export async function GET (
    req:Request,
    { params }: { params: { account_number: string } }
) {
    try {
        const { userId } = auth();
        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        if (!params.account_number) {
            return new NextResponse("Account Number is required", { status: 400 });
        }

        const accnt_details = await prismadb.aWSAccountSchema.findUnique({
            where: {
                AccountNumber: parseInt(params.account_number)
            }
        })
        return NextResponse.json({"found": true});
    } catch (error) {
        throw error
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
