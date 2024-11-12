import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import * as jose from "jose";

export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const tokenCookie = (await cookies()).get("token")?.value;
    const protectedPaths = ["/admin", "/expert", "/applicant"];
    const isProtectedRoute = protectedPaths.some((path) =>
        pathname.startsWith(path),
    );

    // Redirect if trying to access a protected route without a token
    if (isProtectedRoute && !tokenCookie) {
        return NextResponse.redirect(new URL("/auth", request.url));
    }

    // Verify JWT if token is present
    if (tokenCookie) {
        try {
            const secret = process.env.NEXT_PUBLIC_JWT_SECRET;

            if (!secret) {
                throw new Error("JWT_SECRET is not defined");
            }

            const encodedSecret = new TextEncoder().encode(secret);
            const { payload } = await jose.jwtVerify(tokenCookie, encodedSecret);
        } catch (error) {
            console.error("JWT verification failed:", error);
            const response = NextResponse.redirect(new URL("/auth", request.url));
            response.cookies.delete("token");
            return response;
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};