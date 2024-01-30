import { NextResponse } from "next/server";
import { words } from "@/app/util/db";

export function GET() {
    const data = words;
    return NextResponse.json({data},{status: 200}); 
}