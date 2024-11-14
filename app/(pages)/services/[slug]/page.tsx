import MainLayout from "@/layouts/MainLayout";

interface IProps {
  params: Promise<{ slug: string }>;
}

const SingleServicePage: React.FC<IProps> = async ({ params }) => {
  const slug = (await params).slug;

  return (
    <MainLayout>
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
