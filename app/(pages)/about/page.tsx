import PageTitle from "@/components/shared/PageTitle";
import MainLayout from "@/layouts/MainLayout";
import ShowAbout from "./_components/ShowAbout";

const list = [
  { id: 1, title: "امداد فوری", slug: "/" },
  { id: 2, title: "درباره ما", slug: "/about" },
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
