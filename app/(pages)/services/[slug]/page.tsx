import type { Metadata } from "next";
import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";
import { GetServiceBySlug } from "../_core/requests";

interface IProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const slug = (await params).slug;
  const service = await GetServiceBySlug({ slug });

  return {
    title: service?.data?.googleTitle || service?.data?.title,
    description: service?.data?.description,
    openGraph: {
      title: service?.data?.googleTitle || service?.data?.title,
      description: service?.data?.description || "",
      url: `${process.env.NEXT_PUBLIC_URL}/services/${service?.data?.slug}`,
      images: [service?.data?.thumbnail || "/images/default-cover.jpg"],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/services/${service?.data?.slug}`,
    },
  };
}

const SingleServicePage: React.FC<IProps> = async ({ params }) => {
  const slug = (await params).slug;
  const service = await GetServiceBySlug({ slug });

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
      <PageTitle title={service?.data?.googleTitle || ""} list={list} />

      <section className="wrapper">
        <div className="container">
          slug = {decodeURI(service?.data?.slug || "")}
        </div>
      </section>
    </MainLayout>
  );
};

export default SingleServicePage;
