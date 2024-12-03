import {
  IExpertActivationResponse,
  IExpertsResponse,
} from "@/interfaces/Experts";

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

export const expertAccountActivation = async ({
  accessToken,
  expertId,
  isActive,
}: {
  accessToken: string;
  expertId: number;
  isActive: boolean;
}): Promise<IExpertActivationResponse | undefined> => {
  try {
    if (!accessToken) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/admin/experts/activation`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ expertId, isActive }),
      },
    );

    if (!response.ok) {
      console.log("Faild to update expert account activation!");
      return;
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};
