import { IServiceResponse, IServicesResponse } from "@/interfaces/Services";

export const GetServices = async (): Promise<IServicesResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/services`,
      {
        method: "GET",
        next: {
          tags: ["services-data"],
        },
      },
    );

    if (!response.ok) {
      console.log("Faild to get services data!");
      return;
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};

export const GetServiceBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<IServiceResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/services/${slug}`,
      {
        method: "GET",
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.log("Faild to get service data!");
      return;
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};
