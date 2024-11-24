export interface IBlog {
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

export interface IBlogsResponse {
  status: "SUCCESS" | "ERROR";
  data: IBlog[];
}

export interface IBlogResponse {
  status: "SUCCESS" | "ERROR";
  data: IBlog;
}
