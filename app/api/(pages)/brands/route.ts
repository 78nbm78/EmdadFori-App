import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const brands = await db.brands.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        thumbnail: true,
        description: true,
        googleTitle: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    if (!brands)
      return NextResponse.json(
        { status: "ERROR", message: "برندی یافت نشد!" },
        { status: 404 },
      );

    return NextResponse.json(
      { status: "SUCCESS", data: brands },
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
