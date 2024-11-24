import { NextResponse, type NextRequest } from "next/server";
import db from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const slug = (await params).slug; // 'a', 'b', or 'c'

    const blog = await db.blogs.findUnique({
      where: { slug: decodeURI(slug) },
      include: {
        comments: true,
        _count: true,
      },
    });

    if (!blog)
      return NextResponse.json(
        { status: "ERROR", message: "موردی یافت نشد!" },
        { status: 404 },
      );

    return NextResponse.json(
      { status: "SUCCESS", data: blog },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.log(error instanceof Error && error.message);

    return NextResponse.json(
      {
        status: "ERROR",
        message: "خطایی رخ داد!",
      },
      { status: 400 },
    );
  }
}
