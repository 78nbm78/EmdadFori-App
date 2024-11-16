import MainLayout from "@/layouts/MainLayout";
import HomeAbout from "./_components/HomeAbout";
import HomeServices from "./_components/HomeServices";
import HomeIntro from "./_components/HomeIntro";
import HomeBrands from "./_components/HomeBrands";
import HomeBlog from "./_components/HomeBlog";

const HomePage = () => {
  return (
    <MainLayout>
      <HomeIntro />
      <HomeAbout />
      <HomeServices />
      <HomeBrands />
      <HomeBlog />
    </MainLayout>
  );
};

export default HomePage;
