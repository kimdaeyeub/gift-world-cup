import WorldCup from "@/models/Worldcup";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { title, description, gifts, creator, round } = await req.json();
  try {
    await connectToDB();

    const newWorldcup = await WorldCup.create({
      creator,
      title,
      description,
      round,
      gifts,
    });

    if (round !== gifts.length) {
      return NextResponse.json({ error: "물품의 갯수가 잘못되었습니다." });
    }

    return NextResponse.json(newWorldcup);
  } catch (error) {
    return NextResponse.error();
  }
};
