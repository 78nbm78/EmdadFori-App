import { type NextRequest } from "next/server";
import * as jose from "jose";
import { IDecodedToken } from "@/actions/auth";
import { jwtDecode } from "jwt-decode";

export const AdminAuthChecker = async (request: NextRequest) => {
  const jwt = request.headers.get("Authorization")?.split(" ")[1]; // token format should be 'Bearer <token>'
  if (!jwt) return false;

  // Verify JWT token
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jose.jwtVerify(jwt, secret);
  } catch (error: unknown) {
    console.log(error);
    return false;
  }

  const decodedJWT: IDecodedToken = jwtDecode(jwt);

  if (!decodedJWT.isAdmin) return false;

  if (decodedJWT.role !== "ADMIN") return false;

  const userId = decodedJWT.userId;

  if (!userId) return false;

  return true;
};
