import type { IBrandResponse, IBrandsResponse } from "./interfaces";

export const GetBrands = async (): Promise<IBrandsResponse | undefined> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/brands`, {
      method: "GET",
      next: {
        tags: ["brands-data"],
      },
    });

    if (!response.ok) {
      console.log("Faild to get brands data!");
      return;
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};

export const GetBrandBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<IBrandResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/brands/${slug}`,
      {
        method: "GET",
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.log("Faild to get brand data!");
      return;
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};
