import MainLayout from "@/layouts/MainLayout";
import HomeAbout from "./_components/HomeAbout";
import HomeServices from "./_components/HomeServices";
import HomeIntro from "./_components/HomeIntro";
import HomeBrands from "./_components/HomeBrands";
import { GetServices } from "@/services/Services";
// import HomeBlog from "./_components/HomeBlog";

const HomePage = async () => {
  const services = await GetServices();

  return (
    <MainLayout>
      <HomeIntro />
      <HomeAbout />
      <HomeServices services={services?.data || []} />
      <HomeBrands />
      {/* <HomeBlog /> */}
    </MainLayout>
  );
};

export default HomePage;
