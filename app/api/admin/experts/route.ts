export const dynamic = "force-dynamic";

import { NextResponse, type NextRequest } from "next/server";
import * as jose from "jose";
import db from "@/lib/db";
import { JwtDecodedValue } from "@/actions/auth";

export async function GET(request: NextRequest) {
  try {
    const jwt = request.headers.get("Authorization")?.split(" ")[1]; // token format should be 'Bearer <token>'
    if (!jwt)
      return NextResponse.json(
        { type: "ERROR", message: "Unauthorized!" },
        { status: 401 },
      );

    // Verify JWT token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    try {
      await jose.jwtVerify(jwt, secret);
    } catch (error: unknown) {
      console.log(error);
      return NextResponse.json(
        { type: "ERROR", message: "Unauthorized!" },
        { status: 401 },
      );
    }

    // Admin Verification
    const jwtValue = await JwtDecodedValue({ tokenValue: jwt });
    if (!jwtValue?.isAdmin && jwtValue?.role !== "ADMIN")
      return NextResponse.json(
        { type: "ERROR", message: "Unauthorized!" },
        { status: 401 },
      );

    const experts = await db.experts.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        nationalCode: true,
        createdAt: true,
        updatedAt: true,
        isActive: true,
        users: {
          select: {
            id: true,
            email: true,
            mobile: true,
            role: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        _count: {
          select: {
            financialReports: true,
            jobs: true,
          },
        },
      },
    });

    if (!experts)
      return NextResponse.json(
        { type: "ERROR", message: "متخصصی یافت نشد!" },
        { status: 404 },
      );

    const formattedExperts = experts.map((expert) => ({
      userId: expert.users?.id || 0,
      expertId: expert.id,
      firstName: expert.firstName,
      lastName: expert.lastName,
      nationalCode: expert.nationalCode,
      createdAt: expert.createdAt,
      updatedAt: expert.updatedAt,
      email: expert.users?.email || "ثبت نشده",
      mobile: expert.users?.mobile || "ثبت نشده",
      role: expert.users?.role || "ثبت نشده",
      isActive: expert.isActive,
      financialReportsCount: expert._count.financialReports,
      jobsCount: expert._count.jobs,
    }));

    return NextResponse.json(
      { type: "SUCCESS", data: formattedExperts },
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
