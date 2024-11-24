import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";
import type { Metadata } from "next";
import { GetBrandBySlug } from "../_core/requests";

interface IProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const slug = (await params).slug;
  const brand = await GetBrandBySlug({ slug });

  return {
    title: brand?.data?.googleTitle || brand?.data?.title,
    description: brand?.data?.description || "",
    openGraph: {
      title: brand?.data?.googleTitle || brand?.data?.title,
      description: brand?.data?.description,
      url: `${process.env.NEXT_PUBLIC_URL}/brands/${brand?.data?.slug}`,
      images: [brand?.data?.thumbnail || "/images/default-cover.jpg"],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/brand/${brand?.data?.slug}`,
    },
  };
}

const SingleBrandPage: React.FC<IProps> = async ({ params }) => {
  const slug = (await params).slug;
  const brand = await GetBrandBySlug({ slug });

  const list = [
    { id: 1, title: "امداد فوری", slug: `${process.env.NEXT_PUBLIC_URL}` },
    {
      id: 2,
      title: "برندهای خودرو",
      slug: `${process.env.NEXT_PUBLIC_URL}/brands`,
    },
    {
      id: 3,
      title: brand?.data?.title || "",
      slug: `${process.env.NEXT_PUBLIC_URL}/brands/${decodeURI(brand?.data?.slug || slug)}`,
    },
  ];

  return (
    <MainLayout>
      <PageTitle title={brand?.data?.title || ""} list={list} />

      <section className="wrapper">
        <div className="container">slug = {decodeURI(slug)}</div>
      </section>
    </MainLayout>
  );
};

export default SingleBrandPage;
