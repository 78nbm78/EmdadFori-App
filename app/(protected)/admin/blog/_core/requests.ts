import { IAddBlogResponse, IBlogType } from "@/interfaces/Blog";

interface IProps {
  accessToken: string;
  data: IBlogType;
}

export const AddBlogAPI = async ({
  accessToken,
  data,
}: IProps): Promise<IAddBlogResponse | undefined> => {
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
