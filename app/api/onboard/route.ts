// import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { auth } from '@clerk/nextjs';

import prismadb from "@/lib/prismadb"

export async function POST(
    req:Request
) {
    try {
        const { userId } = auth();
        const {account_number, account_name, regions, iam_role} = await req.json();

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        if (!account_number || !iam_role || regions.length === 0) {
            return new NextResponse("Account Number IAM Role and Regions are required.", {status: 400 });    
        }

        await prismadb.aWSAccountSchema.create({
            data: {
                AccountNumber: parseInt(account_number),
                AccountName: account_name,
                SupportedRegions: regions,
                IAMRole: iam_role
            }
        })
        return new NextResponse("Success", { status: 201 });
    } catch (error) {
        if (error.code === 'P2002') {
            return new NextResponse("Failed - Already Exists", { status: 409 });
        }
        else {
            return new NextResponse("Internal Server Error", { status: 500 });
        }
    }
}

export async function GET(
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }
        var acc = []
        const accounts = await prismadb.aWSAccountSchema.findMany({
            select: {
                AccountName: true
            }
        })
        for (var i=0; i<accounts.length; i++) {
            acc.push(accounts[i].AccountName)
        }
        return new NextResponse(acc, {status: 200})
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
