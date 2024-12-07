import { NextResponse, type NextRequest } from "next/server";
import db from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const slug = params.slug; // 'a', 'b', or 'c'

    const service = await db.services.findUnique({
      where: { slug: decodeURI(slug) },
      include: {
        comments: true,
        _count: true,
      },
    });

    if (!service)
      return NextResponse.json(
        { type: "ERROR", message: "موردی یافت نشد!" },
        { status: 404 },
      );

    return NextResponse.json(
      { type: "SUCCESS", data: service },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.log(error instanceof Error && error.message);

    return NextResponse.json(
      {
        type: "ERROR",
        message: "خطایی رخ داد!",
      },
      { status: 400 },
    );
  }
}
