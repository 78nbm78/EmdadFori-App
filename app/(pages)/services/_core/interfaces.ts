export interface IService {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  description?: string;
  googleTitle?: string | null;
  greenIcon?: string;
  createdAt?: string;
  updatedAt?: string;
  _count?: { comments: number };
  content?: string | null;
  comments?: [];
}

export interface IServicesResponse {
  status: "SUCCESS" | "ERROR";
  data: IService[];
}

export interface IServiceResponse {
  status: "SUCCESS" | "ERROR";
  data: IService;
}
