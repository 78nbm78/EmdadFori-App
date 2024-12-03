import db from "@/lib/db";
import { AdminAuthChecker } from "@/utils/AdminAuthChecker";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const checkAuth = await AdminAuthChecker(request);
    if (!checkAuth)
      return NextResponse.json(
        { type: "ERROR", message: "Unauthorized!" },
        { status: 401 },
      );

    const blogs = await db.blogs.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        thumbnail: true,
        description: true,
        googleTitle: true,
        createdAt: true,
        updatedAt: true,
        isPublished: true,
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

    if (!blogs)
      return NextResponse.json(
        { type: "ERROR", message: "مقاله ای یافت نشد!" },
        { status: 404 },
      );

    return NextResponse.json({ type: "SUCCESS", data: blogs }, { status: 200 });
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
