import MainLayout from "@/layouts/MainLayout";
import PageTitle from "@/components/shared/PageTitle";
import ShowBrands from "./_components/ShowBrands";
import { GetBrands } from "@/services/Brands";

const list = [
  { id: 1, title: "امداد فوری", slug: `${process.env.NEXT_PUBLIC_URL}` },
  {
    id: 2,
    title: "برندهای خودرو",
    slug: `${process.env.NEXT_PUBLIC_URL}/brands`,
  },
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
