import { NextResponse, type NextRequest } from "next/server";
import db from "@/lib/db";
import { AdminAuthChecker } from "@/utils/AdminAuthChecker";

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
        { type: "ERROR", message: "برندی یافت نشد!" },
        { status: 404 },
      );

    return NextResponse.json(
      { type: "SUCCESS", data: brands },
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

export async function POST(request: NextRequest) {
  try {
    const checkAuth = await AdminAuthChecker(request);
    if (!checkAuth)
      return NextResponse.json(
        { type: "ERROR", message: "Unauthorized!" },
        { status: 401 },
      );

    const { title, description, slug, thumbnail, googleTitle, content } =
      await request.json();

    const createBrand = await db.brands.create({
      data: { title, description, slug, thumbnail, googleTitle, content },
    });

    if (!createBrand)
      return NextResponse.json(
        { type: "ERROR", message: "Failed to create brand!" },
        { status: 400 },
      );

    return NextResponse.json(
      { type: "SUCCESS", data: createBrand },
      { status: 201 },
    );
  } catch (error) {
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
