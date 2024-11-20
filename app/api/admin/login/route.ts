import db from "@/lib/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { onCreateJWT } from "@/actions/auth";

export async function POST(request: NextRequest) {
  try {
    const { mobile, password } = await request.json();

    if (!mobile || !password) {
      return NextResponse.json(
        { status: "ERROR", message: "Invalid data!" },
        { status: 400 },
      );
    }

    const findUser = await db.users.findUnique({
      where: { mobile },
      select: {
        id: true,
        password: true,
        isAdmin: true,
        role: true,
      },
    });

    if (!findUser) {
      return NextResponse.json(
        { status: "ERROR", message: "شماره موبایل یا کلمه عبور اشتباه است!" },
        { status: 404 },
      );
    }

    const isCorrectPassword = await bcrypt.compare(password, findUser.password);

    if (!isCorrectPassword) {
      return NextResponse.json(
        { status: "ERROR", message: "شماره موبایل یا کلمه عبور اشتباه است!" },
        { status: 400 },
      );
    }

    if (!findUser.isAdmin) {
      return NextResponse.json(
        {
          status: "ERROR",
          message: "شماره موبایل یا کلمه عبور اشتباه است!",
        },
        { status: 400 },
      );
    }

    if (findUser.isAdmin && findUser.role === "ADMIN") {
      // Create JWT Token
      const jwt = await onCreateJWT({
        isAdmin: findUser.isAdmin,
        userId: findUser.id.toString(),
        role: findUser.role,
      });

      // Set the JWT in a cookie
      const response = NextResponse.json(
        { status: "SUCCESS", message: "با موفقیت وارد شدید!" },
        { status: 200 },
      );
      response.cookies.set("token", jwt, {
        httpOnly: true, // Prevent JavaScript access to the cookie
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        // secure: false, // Use secure cookies in production
        path: "/", // Available for the entire site
        maxAge: 24 * 60 * 60, // 24 hours
        sameSite: "lax",
      });

      return response;
    }
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
