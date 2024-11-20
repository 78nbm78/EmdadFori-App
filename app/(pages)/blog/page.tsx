import BlogCard from "@/components/cards/BlogCard";
import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";

const list = [
  { id: 1, title: "امداد فوری", slug: "/" },
  { id: 2, title: "اخبار و مقالات", slug: "/blog" },
];

const BlogPage = () => {
  return (
    <MainLayout>
      <PageTitle title="اخبار و مقالات" list={list} />

      <section className="wrapper bg-[#f5f5f5]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <BlogCard
              slug="/blog/sth"
              thumbnail={null}
              title="Blog 1"
              updatedAt="2024-11-12T13:33:36.195Z"
            />
            <BlogCard
              slug="/blog/sth"
              thumbnail={null}
              title="Blog 2"
              updatedAt="2024-11-12T13:33:36.195Z"
            />
            <BlogCard
              slug="/blog/sth"
              thumbnail={null}
              title="Blog 3"
              updatedAt="2024-11-12T13:33:36.195Z"
            />
            <BlogCard
              slug="/blog/sth"
              thumbnail={null}
              title="Blog 4"
              updatedAt="2024-11-12T13:33:36.195Z"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;
