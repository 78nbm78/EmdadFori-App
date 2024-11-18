import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";
// import type { Metadata } from 'next'

interface IProps {
  params: Promise<{ slug: string }>;
}

// export async function generateMetadata({ params }: IProps): Promise<Metadata> {
//   const slug = (await params).slug;
//   const service = await fetch(`https://.../${slug}`).then((res) => res.json())

//   return {
//     title: service?.data?.googleTitle || service?.data?.title,
//     description: service?.data?.description,
//     openGraph: {
//       title: service?.data?.googleTitle || service?.data?.title,
//       description: service?.data?.description,
//       url: `${process?.env?.NEXT_PUBLIC_URL}/service/${service?.data?.slug}`,
//       images: [service?.data?.thumbnail || "/images/thumbnail.jpg"],
//     },
//     alternates: {
//       canonical: `${process?.env?.NEXT_PUBLIC_URL}/service/${service?.data?.slug}`,
//     },
//   }
// }

const SingleServicePage: React.FC<IProps> = async ({ params }) => {
  const slug = (await params).slug;
  // const service = await GetBlogBySlug({ slug });

  const list = [
    { id: 1, title: "امداد فوری", slug: "/" },
    { id: 2, title: "خدمات امداد فوری", slug: "/services" },
    { id: 3, title: slug, slug: `/services/${slug}` },
  ];

  return (
    <MainLayout>
      <PageTitle title={slug} list={list} />

      <section className="wrapper">
        <div className="container">
          SingleServicePage
          <br />
          slug = {slug}
        </div>
      </section>
    </MainLayout>
  );
};

export default SingleServicePage;
