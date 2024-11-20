import type { IExpertsResponse } from "./interfaces";

export const getAllExperts = async ({
  accessToken,
}: {
  accessToken: string;
}): Promise<IExpertsResponse | undefined> => {
  try {
    if (!accessToken) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/admin/experts`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      },
    );

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};
