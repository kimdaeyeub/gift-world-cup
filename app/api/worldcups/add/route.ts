import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    await connectToDB();
  } catch (error) {
    return NextResponse.error();
  }
};
