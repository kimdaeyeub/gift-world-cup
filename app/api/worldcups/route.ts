import WorldCup from "@/models/Worldcup";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();

    const worldcups = await WorldCup.find({})
      .populate("gifts")
      .populate("creator");

    // return NextResponse.json(worldcups);
    return Response.json(worldcups);
  } catch (error) {
    return NextResponse.error();
  }
};
