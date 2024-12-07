import PageTitle from "@/components/shared/PageTitle";
import { IBlogType } from "@/interfaces/Blog";
import MainLayout from "@/layouts/MainLayout";
import { GetBlogBySlug } from "@/services/Blog";
import type { Metadata } from "next";
// import type { Metadata } from 'next'

interface IProps {
  // params: Promise<{ slug: string }>
  params: { slug: string };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const blog = await GetBlogBySlug({ slug: decodeURI(params.slug) });

  return {
    title: blog?.data?.googleTitle || blog?.data?.title,
    description: blog?.data?.description,
    openGraph: {
      title: blog?.data?.googleTitle || blog?.data?.title,
      description: blog?.data?.description,
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${blog?.data?.slug}`,
      images: [blog?.data?.thumbnail || "/images/default-cover.jpg"],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/blog/${blog?.data?.slug}`,
    },
  };
}

const SingleBlogPage = async ({ params }: IProps) => {
  const slug = params.slug;
  const blog = await GetBlogBySlug({ slug: decodeURI(slug) });

  const list = [
    { id: 1, title: "امداد فوری", slug: `${process.env.NEXT_PUBLIC_URL}` },
    {
      id: 2,
      title: "اخبار و مقالات",
      slug: `${process.env.NEXT_PUBLIC_URL}/blog`,
    },
    {
      id: 3,
      title: blog?.data?.title,
      slug: `${process.env.NEXT_PUBLIC_URL}/blog/${decodeURI(blog?.data?.slug || "")}`,
    },
  ];

  // Blog Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_URL}/blog/${blog?.data?.slug}`,
    },
    headline: `${blog?.data?.googleTitle || blog?.data?.title}`,
    description: `${blog?.data?.description}`,
    image: `${blog?.data?.thumbnail}`,
    author: {
      "@type": "Organization",
      name: `امداد فوری`,
      url: `${process.env.NEXT_PUBLIC_URL}`,
    },
    publisher: {
      "@type": "Organization",
      name: `امداد فوری`,
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_URL}/images/logo.svg`,
      },
    },
    datePublished: `${blog?.data?.createdAt}`,
    dateModified: `${blog?.data?.updatedAt}`,
  };

  return (
    <MainLayout>
      <PageTitle title={blog?.data?.title || ""} list={list as IBlogType[]} />

      <section className="wrapper">
        <div className="container">SingleBlogPage</div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </MainLayout>
  );
};

export default SingleBlogPage;
