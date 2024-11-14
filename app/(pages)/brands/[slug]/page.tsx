import MainLayout from "@/layouts/MainLayout";

interface IProps {
  params: Promise<{ slug: string }>;
}

const SingleBrandPage: React.FC<IProps> = async ({ params }) => {
  const slug = (await params).slug;

  return (
    <MainLayout>
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
