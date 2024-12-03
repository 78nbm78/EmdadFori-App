import { NextResponse, type NextRequest } from "next/server";
import db from "@/lib/db";
import { AdminAuthChecker } from "@/utils/AdminAuthChecker";
import { IBlog, IBlogType } from "@/interfaces/Blog";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const slug = (await params).slug;

    const blog = await db.blogs.findUnique({
      where: { slug: decodeURI(slug) },
      include: {
        comments: true,
        _count: true,
      },
    });

    if (!blog)
      return NextResponse.json(
        { type: "ERROR", message: "موردی یافت نشد!" },
        { status: 404 },
      );

    return NextResponse.json({ type: "SUCCESS", data: blog }, { status: 200 });
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

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const slug = (await params).slug;

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

    const updateBlog = await db.blogs.update({
      where: { slug },
      data: {
        title: data.title,
        description: data.description,
        slug: data.slug,
        thumbnail: (data.thumbnail as string) || "",
        googleTitle: data.googleTitle,
        content: data.content,
        isPublished: data.isPublished,
      },
    });

    if (!updateBlog)
      return NextResponse.json(
        { type: "ERROR", message: "خطایی رخ داد! لطفا بعدا تلاش کنید." },
        { status: 400 },
      );

    return NextResponse.json(
      { type: "SUCCESS", message: "صفحه با موفقیت ویرایش شد!" },
      { status: 200 },
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
