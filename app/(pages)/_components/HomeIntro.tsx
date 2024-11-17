"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import Slide1 from "@/public/images/slide01.jpg";
import Slide2 from "@/public/images/slide02.jpg";
import Slide3 from "@/public/images/slide03.jpg";
import { CarFrontIcon, Clock3Icon, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeIntro = () => {
  return (
    <section className="container-fluid !px-0">
      <Swiper
        slidesPerView={1}
        loop
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        speed={500}
        navigation
      >
        <SwiperSlide>
          <figure className="relative">
            <Image
              width={1600}
              alt="امداد خودرو فوری ۲۴ ساعته"
              title="امداد خودرو فوری ۲۴ ساعته"
              src={Slide1}
              className="block w-full object-cover object-center min-h-[300px] xs:min-h-[360px] max-h-[360px] sm:max-h-[480px] lg:max-h-[600px]"
            />
            <figcaption className="absolute start-0 top-0 w-full h-full bg-gradient-to-t from-black/80 to-black/30 text-white flex flex-col items-center justify-end gap-8 px-4 pt-4 pb-12 sm:pb-16 lg:pb-20 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              <h2>امداد خودرو فوری ۲۴ ساعته</h2>
              <Button size="lg" variant="secondary" className="gap-3">
                <CarFrontIcon className="scale-150" />
                درخواست آنی امداد خودرو
              </Button>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <Image
              width={1600}
              alt="امداد خودرو در تهران"
              title="امداد خودرو در تهران"
              src={Slide2}
              className="block w-full object-cover object-center min-h-[300px] xs:min-h-[360px] max-h-[360px] sm:max-h-[480px] lg:max-h-[600px]"
            />
            <figcaption className="absolute start-0 top-0 w-full h-full bg-gradient-to-t from-black/80 to-black/30 text-white flex flex-col items-center justify-end gap-8 px-4 pt-4 pb-12 sm:pb-16 lg:pb-20 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              <h2>امداد خودرو در تهران</h2>
              <Button size="lg" variant="secondary" className="gap-3">
                <CarFrontIcon className="scale-150" />
                درخواست آنی امداد خودرو
              </Button>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <Image
              width={1600}
              alt="امداد خودرو سیار"
              title="امداد خودرو سیار"
              src={Slide3}
              className="block w-full object-cover object-center min-h-[300px] xs:min-h-[360px] max-h-[360px] sm:max-h-[480px] lg:max-h-[600px]"
            />
            <figcaption className="absolute start-0 top-0 w-full h-full bg-gradient-to-t from-black/80 to-black/30 text-white flex flex-col items-center justify-end gap-8 px-4 pt-4 pb-12 sm:pb-16 lg:pb-20 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              <h2>امداد خودرو سیار</h2>
              <Button size="lg" variant="secondary" className="gap-3">
                <CarFrontIcon className="scale-150" />
                درخواست آنی امداد خودرو
              </Button>
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>

      <div className="flex flex-wrap">
        <div className="w-1/2 order-2 md:order-1 md:flex-1 border-b-2 border-transparent xs:text-base bg-green-500 p-3 md:p-6 text-center flex items-center gap-2 justify-center flex-col sm:flex-row">
          <span className="w-11 h-11 rounded-full bg-black/15 inline-flex items-center justify-center shrink-0">
            <PhoneCallIcon size={24} />
          </span>
          ۷ روز هفته، <b>۲۴ ساعت</b> شبانه روز
        </div>
        <div className="w-full order-1 md:order-2 md:flex-1 border-b-2 border-green-500 bg-white text-green-600 p-5 sm:p-6 flex items-center justify-center">
          <a
            href="tel:+98"
            rel="noopener noreferrer nofollow"
            dir="ltr"
            className="text-2xl xs:text-3xl"
          >
            ۰۲۱ <span className="font-bold">۱۲۳ ۴۵ ۶۷</span>
          </a>
        </div>
        <div className="w-1/2 order-3 md:order-3 md:flex-1 border-b-2 border-transparent xs:text-base bg-green-500 p-3 md:p-6 text-center flex items-center gap-2 justify-center flex-col sm:flex-row">
          <span className="w-11 h-11 rounded-full bg-black/15 inline-flex items-center justify-center shrink-0">
            <Clock3Icon size={24} />
          </span>
          رسیدن کمتر از <b>۳۰ دقیقه</b>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
