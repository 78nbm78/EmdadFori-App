import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";
import { GetBrandBySlug } from "@/services/Brands";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface IProps {
  // params: Promise<{ slug: string }>
  params: { slug: string };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const slug = params.slug;
  const brand = await GetBrandBySlug({ slug: decodeURI(slug) });

  return {
    title: brand?.data?.googleTitle || brand?.data?.title,
    description: brand?.data?.description || "",
    openGraph: {
      title: brand?.data?.googleTitle || brand?.data?.title,
      description: brand?.data?.description,
      url: `${process.env.NEXT_PUBLIC_URL}/brands/${brand?.data?.slug}`,
      images: [
        (brand?.data?.thumbnail as string) || "/images/default-cover.jpg",
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/brand/${brand?.data?.slug}`,
    },
  };
}

const SingleBrandPage = async ({ params }: IProps) => {
  const slug = params.slug;
  const brand = await GetBrandBySlug({ slug: decodeURI(slug) });

  if (!brand) return notFound();

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
      <PageTitle
        title={brand?.data?.googleTitle || brand?.data?.title || ""}
        list={list}
        smallTitle={true}
      />

      <section className="wrapper">
        <div className="container">
          <div
            className="single-content"
            dangerouslySetInnerHTML={{ __html: `${brand?.data?.content}` }}
          ></div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SingleBrandPage;
