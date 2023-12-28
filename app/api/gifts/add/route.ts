import Gift from "@/models/Gift";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { creator, image, title, description, tags } = await req.json();

  try {
    await connectToDB();

    const tagFormat = tags.split(",");

    const newGift = await Gift.create({
      creator,
      image,
      title,
      description,
      tags: tagFormat,
    });

    return NextResponse.json(newGift);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};
