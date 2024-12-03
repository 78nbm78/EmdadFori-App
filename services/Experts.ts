import { IExpertsResponse } from "@/interfaces/Experts";

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

    if (!response.ok) {
      console.log("Faild to get experts data!");
      return;
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};
