import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";
import ShowAbout from "./_components/ShowAbout";

const list = [
  { id: 1, title: "امداد فوری", slug: `${process.env.NEXT_PUBLIC_URL}` },
  { id: 2, title: "درباره ما", slug: `${process.env.NEXT_PUBLIC_URL}/about` },
];

const AboutPage = () => {
  return (
    <MainLayout>
      <PageTitle title="درباره ما" list={list} />

      <ShowAbout />
    </MainLayout>
  );
};

export default AboutPage;
