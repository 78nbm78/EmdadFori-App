import { IBlogResponse, IBlogsResponse, IBlogType } from "@/interfaces/Blog";

export const GetBlogs = async (): Promise<IBlogsResponse | undefined> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs`, {
      method: "GET",
      next: {
        tags: ["blogsData"],
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

export const AdminGetBlogs = async (
  accessToken: string,
): Promise<IBlogsResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/admin/blogs`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
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

interface IAddProps {
  accessToken: string;
  data: IBlogType;
}
export const AddBlogAPI = async ({
  accessToken,
  data,
}: IAddProps): Promise<IBlogResponse | undefined> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};

interface IUpdateProps extends IAddProps {
  pageSlug: string;
}

export const UpdateBlogAPI = async ({
  accessToken,
  pageSlug,
  data,
}: IUpdateProps): Promise<IBlogResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/blogs/${pageSlug}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};
