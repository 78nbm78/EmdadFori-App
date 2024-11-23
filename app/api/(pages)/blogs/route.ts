import { NextResponse, type NextRequest } from "next/server";
import db from "@/lib/db";

export async function GET(request: NextRequest) {
    try {
        const takeParam = request.nextUrl.searchParams.get("take");
        const take = takeParam ? Number(takeParam) : undefined;

        // Check if the limit is a valid number 
        if (takeParam && (take === undefined || isNaN(take))) {
            return NextResponse.json(
                { status: "ERROR", message: "Invalid take parameter" },
                { status: 400 },
            );
        }

        const blogs = await db.blogs.findMany({
            take: take,
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

        if (!blogs) return NextResponse.json(
            { status: "ERROR", message: "مقاله ای یافت نشد!" },
            { status: 404 },
        );

        return NextResponse.json(
            { status: "SUCCESS", data: blogs },
            { status: 200 },
        );
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
