import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";
import ShowServices from "./_components/ShowServices";
import { GetServices } from "./_core/requests";

const list = [
  { id: 1, title: "امداد فوری", slug: "/" },
  { id: 2, title: "خدمات امداد فوری", slug: "/services" },
];

const ServicesPage = async () => {
  const services = await GetServices();

  return (
    <MainLayout>
      <PageTitle title="خدمات امداد فوری" list={list} />

      <section className="wrapper">
        <div className="container">
          <ShowServices services={services?.data || []} />
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;
