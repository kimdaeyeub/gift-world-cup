import WorldCup from "@/models/Worldcup";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async ({ params }: { params: { id: string } }) => {
  try {
    await connectToDB();

    // const worldcup = await WorldCup.findById(params.id);

    console.log(params.id);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.error();
  }
};
