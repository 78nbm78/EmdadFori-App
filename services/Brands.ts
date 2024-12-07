import {
  IBrandResponse,
  IBrandsResponse,
  IBrandType,
} from "@/interfaces/Brand";

export const GetBrands = async (): Promise<IBrandsResponse | undefined> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/brands`, {
      method: "GET",
      next: {
        tags: ["brandsData"],
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

export const AdminGetBrands = async (
  accessToken: string,
): Promise<IBrandsResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/admin/brands`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      },
    );

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

interface IAddProps {
  accessToken: string;
  data: IBrandType;
}
export const AddBrandAPI = async ({
  accessToken,
  data,
}: IAddProps): Promise<IBrandResponse | undefined> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/brands`, {
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

export const UpdateBrandAPI = async ({
  accessToken,
  pageSlug,
  data,
}: IUpdateProps): Promise<IBrandResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/brands/${pageSlug}`,
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

interface IDeleteBrand {
  accessToken: string;
  pageSlug: string;
}

interface IResponse {
  type: "SUCCESS" | "ERROR";
  message: string;
}

export const DeleteBrandBySlug = async ({
  accessToken,
  pageSlug,
}: IDeleteBrand): Promise<IResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/brands/${pageSlug}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
};
