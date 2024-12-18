"use server";

import { cookies } from "next/headers";

export async function getCookieByKey(
  name: string,
): Promise<string | undefined> {
  return cookies().get(name)?.value;
}

export async function getAllCookies() {
  return cookies().getAll();
}

interface IKeyAndValue {
  key: string;
  value: string;
}
export async function setCookieByKeyAndValue({
  key,
  value,
}: IKeyAndValue): Promise<void> {
  // (await cookies()).set(key, value);
  cookies().set({
    name: key,
    value: value,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
}

export async function deleteCookieByKey(key: string): Promise<void> {
  cookies().delete(key);
}
