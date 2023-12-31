// import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { auth } from '@clerk/nextjs';

import prismadb from "@/lib/prismadb"

export async function POST(
    req:Request
) {
    try {
        const { userId } = auth();
        const {account_number, regions, iam_role} = await req.json();

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        if (!account_number || !iam_role || regions.length === 0) {
            return new NextResponse("Account Number IAM Role and Regions are required.", {status: 400 });    
        }
        await prismadb.aWSAccountSchema.create({
            data: {
                AccountNumber: parseInt(account_number),
                SupportedRegions: regions,
                IAMRole: iam_role
            }
        })
        return new NextResponse("Success", { status: 201 });
    } catch (error) {
        throw error
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
