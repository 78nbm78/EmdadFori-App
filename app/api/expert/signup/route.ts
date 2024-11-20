import db from "@/lib/db";
import { NextResponse, type NextRequest } from "next/server";
import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, password, mobile, phoneNumber, nationalCode } =
      await request.json();

    if (
      !mobile ||
      !password ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !nationalCode
    ) {
      return NextResponse.json(
        { status: "ERROR", message: "Invalid data!" },
        { status: 400 },
      );
    }

    // create new expert
    const createExpert = await db.experts.create({
      data: {
        firstName,
        lastName,
        nationalCode,
        phoneNumber,
      },
    });

    if (!createExpert) {
      return NextResponse.json(
        { status: "ERROR", message: "خطا در ایجاد متخصص!" },
        { status: 404 },
      );
    }

    // Hash the entered password
    const hashedPassword = bcrypt.hashSync(password, 12);

    try {
      await db.users.create({
        data: {
          mobile,
          password: hashedPassword,
          expertId: createExpert.id,
          role: "EXPERT",
        },
      });

      return NextResponse.json(
        { status: "SUCCESS", message: "ثبت نام با موفقیت انجام شد!" },
        { status: 201 },
      );
    } catch (error) {
      // Handle duplicate mobile
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        // delete the created doctor from db
        await db.experts.delete({
          where: { id: createExpert.id },
        });
        return NextResponse.json(
          { status: "ERROR", message: "لطفا یک شماره دیگر انتخاب کنید!" },
          { status: 409 },
        );
      }

      // Handle other errors
      return NextResponse.json(
        { status: "ERROR", message: "خطا در ایجاد کاربر!" },
        { status: 400 },
      );
    }
  } catch (error: unknown) {
    console.log(error instanceof Error && error.message);

    // Handle duplicate nationalCode
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { status: "ERROR", message: "لطفا یک کد ملی دیگر بنویسید!" },
        { status: 409 },
      );
    }

    return NextResponse.json(
      {
        status: "ERROR",
        message: "خطایی رخ داد!",
      },
      { status: 400 },
    );
  }
}
