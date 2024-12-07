import {
  IServiceResponse,
  IServicesResponse,
  IServiceType,
} from "@/interfaces/Services";

export const GetServices = async (): Promise<IServicesResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/services`,
      {
        method: "GET",
        next: {
          tags: ["servicesData"],
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

export const AdminGetServices = async (
  accessToken: string,
): Promise<IServicesResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/admin/services`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
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

interface IAddProps {
  accessToken: string;
  data: IServiceType;
}
export const AddServiceAPI = async ({
  accessToken,
  data,
}: IAddProps): Promise<IServiceResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/services`,
      {
        method: "POST",
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

interface IUpdateProps extends IAddProps {
  pageSlug: string;
}

export const UpdateServiceAPI = async ({
  accessToken,
  pageSlug,
  data,
}: IUpdateProps): Promise<IServiceResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/services/${decodeURI(pageSlug)}`,
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

interface IDeleteService {
  accessToken: string;
  pageSlug: string;
}

interface IResponse {
  type: "SUCCESS" | "ERROR";
  message: string;
}

export const DeleteServiceBySlug = async ({
  accessToken,
  pageSlug,
}: IDeleteService): Promise<IResponse | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/services/${decodeURI(pageSlug)}`,
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
