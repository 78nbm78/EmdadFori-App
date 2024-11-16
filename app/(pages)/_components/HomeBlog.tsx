import BlogCard from "@/components/cards/BlogCard";

const HomeBlog = () => {
  return (
    <section className="wrapper bg-[#f5f5f5]">
      <div className="container">
        <div className="flex flex-col items-center mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black text-center">
            آخرین اخبار و مقالات
          </h2>
          <hr className="custom-hr !mb-0" />
        </div>

        <div className="grid grid-cols-4 gap-6">
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
  );
};

export default HomeBlog;
