import * as jose from "jose";
import { jwtDecode } from "jwt-decode";

interface IProps {
  isAdmin: boolean;
  userId: string;
  role: "ADMIN" | "EXPERT" | "APPLICANT" | "ASSISTANT";
}

export const onCreateJWT = async ({ isAdmin, userId, role }: IProps) => {
  // Create JWT Token
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";

  // Include additional information in the payload
  const payload = {
    userId,
    isAdmin,
    role,
  };

  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  return jwt;
};

export type IDecodedToken = {
  userId: string;
  isAdmin: boolean;
  role: "ADMIN" | "EXPERT" | "APPLICANT";
  exp: number;
};

export const JwtDecodedValue = async ({
  tokenValue,
}: {
  tokenValue: string | undefined;
}) => {
  if (!tokenValue) return null;

  const decoded: IDecodedToken = jwtDecode(tokenValue);

  return decoded;
};
