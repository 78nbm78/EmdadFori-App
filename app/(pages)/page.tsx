import MainLayout from "@/layouts/MainLayout";
import HomeAbout from "./_components/HomeAbout";
import HomeServices from "./_components/HomeServices";
import HomeIntro from "./_components/HomeIntro";
import HomeBrands from "./_components/HomeBrands";

const HomePage = () => {
  return (
    <MainLayout>
      <HomeIntro />
      <HomeAbout />
      <HomeServices />
      <HomeBrands />
    </MainLayout>
  );
};

export default HomePage;
