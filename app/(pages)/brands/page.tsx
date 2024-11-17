import MainLayout from "@/layouts/MainLayout";
import PageTitle from "@/components/shared/PageTitle";
import ShowBrands from "./_components/ShowBrands";

const list = [
  { id: 1, title: "امداد فوری", slug: "/" },
  { id: 2, title: "برندهای خودرو", slug: "/brands" },
];

const BrandsPage = () => {
  return (
    <MainLayout>
      <PageTitle title="برندهای خودرو" list={list} />

      <ShowBrands />
    </MainLayout>
  );
};

export default BrandsPage;
