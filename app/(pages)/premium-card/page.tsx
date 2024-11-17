import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";

const list = [
  { id: 1, title: "امداد فوری", slug: "/" },
  { id: 2, title: "کارت طلایی امداد فوری", slug: "/premium-card" },
];

const PremiumCartPage = () => {
  return (
    <MainLayout>
      <PageTitle title="کارت طلایی امداد فوری" list={list} />

      <section className="wrapper">
        <div className="container">بزودی...</div>
      </section>
    </MainLayout>
  );
};

export default PremiumCartPage;
