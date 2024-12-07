export const dynamic = "force-dynamic";

import { NextResponse, type NextRequest } from "next/server";
import db from "@/lib/db";
import { AdminAuthChecker } from "@/utils/AdminAuthChecker";
import { IBrand, IBrandType } from "@/interfaces/Brand";

export async function GET() {
  try {
    const brands = await db.brands.findMany({
      where: { isPublished: true },
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

    const data: IBrandType = await request.json();

    const validation = IBrand.safeParse(data);
    if (!validation.success) {
      return NextResponse.json(
        { type: "ERROR", message: "Invalid form data!" },
        { status: 400 },
      );
    }

    const createBrand = await db.brands.create({
      data: {
        title: data.title,
        description: data.description,
        slug: decodeURI(data.slug),
        thumbnail: (data.thumbnail as string) || "",
        googleTitle: data.googleTitle,
        content: data.content,
        isPublished: data.isPublished,
      },
    });

    if (!createBrand)
      return NextResponse.json(
        { type: "ERROR", message: "خطایی رخ داد! لطفا بعدا تلاش کنید." },
        { status: 400 },
      );

    return NextResponse.json(
      { type: "SUCCESS", message: "صفحه با موفقیت ایجاد شد!", data: data },
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
