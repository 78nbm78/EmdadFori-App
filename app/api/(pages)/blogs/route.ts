export const dynamic = "force-dynamic";

import { NextResponse, type NextRequest } from "next/server";
import db from "@/lib/db";
import { AdminAuthChecker } from "@/utils/AdminAuthChecker";
import { IBlog, IBlogType } from "@/interfaces/Blog";

export async function GET(request: NextRequest) {
  try {
    const takeParam = request.nextUrl.searchParams.get("take");
    const take = takeParam ? Number(takeParam) : undefined;

    // if (takeParam && (take === undefined || isNaN(take))) {
    //   return NextResponse.json(
    //     { type: "ERROR", message: "Invalid take parameter" },
    //     { status: 400 },
    //   );
    // }

    const blogs = await db.blogs.findMany({
      where: { isPublished: true },
      take: take || 50,
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

export async function POST(request: NextRequest) {
  try {
    const checkAuth = await AdminAuthChecker(request);
    if (!checkAuth)
      return NextResponse.json(
        { type: "ERROR", message: "Unauthorized!" },
        { status: 401 },
      );

    const data: IBlogType = await request.json();

    const validation = IBlog.safeParse(data);
    if (!validation.success) {
      return NextResponse.json(
        { type: "ERROR", message: "Invalid form data!" },
        { status: 400 },
      );
    }

    const createBlog = await db.blogs.create({
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

    if (!createBlog)
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
