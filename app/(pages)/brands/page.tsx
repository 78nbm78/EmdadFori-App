import MainLayout from "@/layouts/MainLayout";
import PageTitle from "@/components/shared/PageTitle";
import ShowBrands from "./_components/ShowBrands";
import { GetBrands } from "./_core/requests";

const list = [
  { id: 1, title: "امداد فوری", slug: "/" },
  { id: 2, title: "برندهای خودرو", slug: "/brands" },
];

const BrandsPage = async () => {
  const brands = await GetBrands();

  return (
    <MainLayout>
      <PageTitle title="برندهای خودرو" list={list} />

      <ShowBrands brands={brands?.data || []} />
    </MainLayout>
  );
};

export default BrandsPage;
