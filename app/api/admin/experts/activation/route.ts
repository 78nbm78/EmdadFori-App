export const dynamic = "force-dynamic";

import db from "@/lib/db";
import { AdminAuthChecker } from "@/utils/AdminAuthChecker";
import { NextResponse, type NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const checkAuth = await AdminAuthChecker(request);
    if (!checkAuth)
      return NextResponse.json(
        { type: "ERROR", message: "Unauthorized!" },
        { status: 401 },
      );

    const { expertId, isActive } = await request.json();

    if (!expertId) {
      return NextResponse.json(
        { type: "ERROR", message: "Invalid expert id!" },
        { status: 400 },
      );
    }

    const updateExpert = await db.experts.update({
      where: { id: Number(expertId) },
      data: { isActive },
    });

    if (!updateExpert)
      return NextResponse.json(
        { type: "ERROR", message: "خطایی رخ داد! لطفا بعدا تلاش کنید." },
        { status: 400 },
      );

    return NextResponse.json(
      {
        type: "SUCCESS",
        message: "با موفقیت انجام شد!",
        isActive: updateExpert.isActive,
      },
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
