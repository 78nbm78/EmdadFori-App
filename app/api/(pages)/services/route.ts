import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const services = await db.services.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        thumbnail: true,
        description: true,
        googleTitle: true,
        greenIcon: true,
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

    if (!services)
      return NextResponse.json(
        { status: "ERROR", message: "خدماتی یافت نشد!" },
        { status: 404 },
      );

    return NextResponse.json(
      { status: "SUCCESS", data: services },
      {
        // headers: { "Access-Control-Allow-Origin": "*" }, // Allow requests from any origin
        status: 200,
      },
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
