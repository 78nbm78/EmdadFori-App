import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";
import ShowServices from "./_components/ShowServices";

const list = [
  { id: 1, title: "امداد فوری", slug: "/" },
  { id: 2, title: "خدمات امداد فوری", slug: "/services" },
];

const ServicesPage = () => {
  return (
    <MainLayout>
      <PageTitle title="خدمات امداد فوری" list={list} />

      <section className="wrapper">
        <div className="container">
          <ShowServices />
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;
