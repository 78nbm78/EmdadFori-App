import BlogCard from "@/components/cards/BlogCard";
import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";
import { GetBlogs } from "@/services/Blog";

const list = [
  { id: 1, title: "امداد فوری", slug: `${process.env.NEXT_PUBLIC_URL}` },
  {
    id: 2,
    title: "اخبار و مقالات",
    slug: `${process.env.NEXT_PUBLIC_URL}/blog`,
  },
];

const BlogPage = async () => {
  const blogs = await GetBlogs();

  return (
    <MainLayout>
      <PageTitle title="اخبار و مقالات" list={list} />

      <section className="wrapper bg-[#f5f5f5]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogs?.data?.length &&
              blogs.data.map((blog) => (
                <BlogCard
                  key={blog.id}
                  slug={`/blog/${blog.slug}`}
                  thumbnail={blog.thumbnail}
                  title={blog.title}
                  updatedAt={blog.updatedAt || ""}
                />
              ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;
