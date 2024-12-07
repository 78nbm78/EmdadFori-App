export const dynamic = "force-dynamic";

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

    const services = await db.services.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        thumbnail: true,
        description: true,
        googleTitle: true,
        createdAt: true,
        updatedAt: true,
        greenIcon: true,
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

    if (!services)
      return NextResponse.json(
        { type: "ERROR", message: "خدماتی یافت نشد!" },
        { status: 404 },
      );

    return NextResponse.json(
      { type: "SUCCESS", data: services },
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
