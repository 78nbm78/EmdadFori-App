import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";
// import type { Metadata } from 'next'

interface IProps {
  params: Promise<{ slug: string }>;
}

// export async function generateMetadata({ params }: IProps): Promise<Metadata> {
//   const slug = (await params).slug;
//   const brand = await fetch(`https://.../${slug}`).then((res) => res.json())

//   return {
//     title: brand?.data?.googleTitle || brand?.data?.title,
//     description: brand?.data?.description,
//     openGraph: {
//       title: brand?.data?.googleTitle || brand?.data?.title,
//       description: brand?.data?.description,
//       url: `${process?.env?.NEXT_PUBLIC_URL}/brand/${brand?.data?.slug}`,
//       images: [brand?.data?.thumbnail || "/images/thumbnail.jpg"],
//     },
//     alternates: {
//       canonical: `${process?.env?.NEXT_PUBLIC_URL}/brand/${brand?.data?.slug}`,
//     },
//   }
// }

const SingleBrandPage: React.FC<IProps> = async ({ params }) => {
  const slug = (await params).slug;
  // const brand = await GetBlogBySlug({ slug });

  const list = [
    { id: 1, title: "امداد فوری", slug: "/" },
    { id: 2, title: "برندهای خودرو", slug: "/brands" },
    { id: 3, title: slug, slug: `/brands/${slug}` },
  ];

  return (
    <MainLayout>
      <PageTitle title={slug} list={list} />

      <section className="wrapper">
        <div className="container">
          SingleBrandPage
          <br />
          slug = {slug}
        </div>
      </section>
    </MainLayout>
  );
};

export default SingleBrandPage;
