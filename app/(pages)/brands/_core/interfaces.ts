export interface IBrand {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  description?: string;
  googleTitle?: string | null;
  createdAt?: string;
  updatedAt?: string;
  _count?: { comments: number };
  content?: string | null;
  comments?: [];
}

export interface IBrandsResponse {
  type: "SUCCESS" | "ERROR";
  data: IBrand[];
}

export interface IBrandResponse {
  type: "SUCCESS" | "ERROR";
  data: IBrand;
}
