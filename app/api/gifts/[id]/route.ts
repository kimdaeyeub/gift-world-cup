import Gift from "@/models/Gift";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const gift = await Gift.findById(params.id);
    if (!gift)
      return NextResponse.json({
        message: "해당 정보의 물품이 존재하지 않습니다.",
      });

    return NextResponse.json(gift);
  } catch (error) {
    return NextResponse.error();
  }
};
