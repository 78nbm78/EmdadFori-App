import type { IBlogResponse, IBlogsResponse } from "./interfaces";

export const GetBlogs = async (): Promise<IBlogsResponse | undefined> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs`, {
      method: "GET",
      next: {
        tags: ["blogs-data"],
      },
    });

    if (!response.ok) {
      console.log("Faild to get blogs data!");
      return;
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};

export const GetFilteredBlogs = async ({
  take,
}: {
  take: number;
}): Promise<IBlogsResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/blogs?take=${take}`,
      {
        method: "GET",
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.log("Faild to get blogs data!");
      return;
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};

export const GetBlogBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<IBlogResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/blogs/${slug}`,
      {
        method: "GET",
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.log("Faild to get blog data!");
      return;
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};
