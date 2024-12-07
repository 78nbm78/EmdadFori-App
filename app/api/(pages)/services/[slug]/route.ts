export const dynamic = "force-dynamic";

import { NextResponse, type NextRequest } from "next/server";
import db from "@/lib/db";
import { AdminAuthChecker } from "@/utils/AdminAuthChecker";
import { IService, IServiceType } from "@/interfaces/Services";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const slug = params.slug;

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

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const slug = params.slug;

    const checkAuth = await AdminAuthChecker(request);
    if (!checkAuth)
      return NextResponse.json(
        { type: "ERROR", message: "Unauthorized!" },
        { status: 401 },
      );

    const data: IServiceType = await request.json();

    const validation = IService.safeParse(data);
    if (!validation.success) {
      return NextResponse.json(
        { type: "ERROR", message: "Invalid data!" },
        { status: 400 },
      );
    }

    const updateService = await db.services.update({
      where: { slug: decodeURI(slug) },
      data: {
        title: data.title,
        description: data.description,
        slug: decodeURI(data.slug),
        thumbnail: (data.thumbnail as string) || "",
        googleTitle: data.googleTitle,
        content: data.content,
        isPublished: data.isPublished,
        greenIcon: data.greenIcon,
      },
    });

    if (!updateService)
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const slug = params.slug;

    const checkAuth = await AdminAuthChecker(request);
    if (!checkAuth)
      return NextResponse.json(
        { type: "ERROR", message: "Unauthorized!" },
        { status: 401 },
      );

    const deleteService = await db.services.delete({
      where: { slug: decodeURI(slug) },
    });

    if (!deleteService)
      return NextResponse.json(
        { type: "ERROR", message: "خطایی رخ داد! لطفا بعدا تلاش کنید." },
        { status: 400 },
      );

    return NextResponse.json(
      { type: "SUCCESS", message: "با موفقیت حذف شد!" },
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
