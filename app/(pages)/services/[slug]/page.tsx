import type { Metadata } from "next";
import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";
import { GetServiceBySlug } from "@/services/Services";
import { notFound } from "next/navigation";

interface IProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const slug = params.slug;
  const service = await GetServiceBySlug({ slug: decodeURI(slug) });

  return {
    title: service?.data?.googleTitle || service?.data?.title,
    description: service?.data?.description,
    openGraph: {
      title: service?.data?.googleTitle || service?.data?.title,
      description: service?.data?.description || "",
      url: `${process.env.NEXT_PUBLIC_URL}/services/${service?.data?.slug}`,
      images: [
        (service?.data?.thumbnail as string) || "/images/default-cover.jpg",
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/services/${service?.data?.slug}`,
    },
  };
}

const SingleServicePage = async ({ params }: IProps) => {
  const slug = params.slug;
  const service = await GetServiceBySlug({ slug: decodeURI(slug) });

  if (!service) return notFound();

  const list = [
    { id: 1, title: "امداد فوری", slug: `${process.env.NEXT_PUBLIC_URL}` },
    {
      id: 2,
      title: "خدمات امداد فوری",
      slug: `${process.env.NEXT_PUBLIC_URL}/services`,
    },
    {
      id: 3,
      title: service?.data?.title || "",
      slug: `${process.env.NEXT_PUBLIC_URL}/services/${decodeURI(service?.data?.slug || "")}`,
    },
  ];

  return (
    <MainLayout>
      <PageTitle
        title={service?.data?.googleTitle || service?.data?.title || ""}
        list={list}
        smallTitle={true}
      />

      <section className="wrapper">
        <div className="container">
          <div
            className="single-content"
            dangerouslySetInnerHTML={{ __html: `${service?.data?.content}` }}
          ></div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SingleServicePage;
