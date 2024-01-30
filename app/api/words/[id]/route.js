import { words } from "@/app/util/db";
import { NextResponse } from "next/server";

//2. get specific user 

export async function GET(_, res) {
    const { id } = await res.params;
    const word = words.filter((w) => w.id == id);
    return NextResponse.json({word, ok: true});
} 