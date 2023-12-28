import Gift from "@/models/Gift";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();

    const gifts = await Gift.find({});
    return NextResponse.json(gifts, { status: 200 });
  } catch (error) {
    return NextResponse.error();
  }
};
