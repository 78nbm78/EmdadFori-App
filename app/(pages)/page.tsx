import MainLayout from "@/layouts/MainLayout";
import HomeAbout from "./_components/HomeAbout";
import HomeServices from "./_components/HomeServices";
import HomeIntro from "./_components/HomeIntro";

const HomePage = () => {
  return (
    <MainLayout>
      <HomeIntro />
      <HomeAbout />
      <HomeServices />
    </MainLayout>
  );
};

export default HomePage;
