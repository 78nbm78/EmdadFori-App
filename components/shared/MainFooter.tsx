import Image from "next/image";
import Link from "next/link";
import LogoBlack from "@/public/images/logo.png";
import NeedBtn from "./footer/NeedBtn";
import { Mail, MapPin, PhoneCall, TabletSmartphone } from "lucide-react";
import { Button } from "../ui/button";
import ServicesData from "@/mock/ServicesData.json";
import FooterBrands from "./footer/FooterBrands";

const MainFooter = () => {
  return (
    <>
      <section className="wrapper pb-44 sm:pb-64 bg-stone-200 dark:bg-stone-800">
        <div className="container m-auto text-center">
          <div className="mb-8 text-stone-800 !leading-relaxed dark:text-white space-y-5">
            <p className="font-black text-3xl md:text-4xl">
              نیاز به امداد خودرو فوری دارید؟
            </p>
            <p className="font-bold text-xl md:text-2xl">
              یا بدنبال یدک کش خودرو هستید؟
            </p>
          </div>
          <p className="text-stone-600 dark:text-white/75 text-base md:text-lg mb-6 md:mb-8">
            از طریق دکمه <b>درخواست آنی امداد خودرو</b> می‌توانید به صورت آنلاین
            درخواست امداد کرده و پس از ۵ دقیقه همکاران ما پاسخگوی شما هستند.
          </p>
          <NeedBtn />
        </div>
      </section>

      <footer className="relative bg-gradient-to-b from-[#2c2c2c] to-[#1c1c1c]">
        <div className="absolute left-0 -top-32 h-40 sm:-top-40 sm:h-48 lg:-top-64 lg:h-72 w-full pointer-events-none bg-[url('/images/footer-wave.svg')] bg-no-repeat bg-center bg-cover -scale-x-100"></div>
        <div className="container m-auto relative">
          <div className="absolute right-4 -top-16 sm:-top-24 lg:-top-36">
            <Link href="/">
              <Image
                src={LogoBlack}
                width={200}
                alt="امداد فوری | EmdadFori"
                title="امداد فوری | EmdadFori"
              />
            </Link>
          </div>

          <div className="pt-16 sm:pt-10 lg:pt-8 sm:flex sm:items-center sm:justify-between">
            <div className="mb-6 sm:mb-0 space-y-8">
              <p className="text-white text-3xl md:text-4xl text-center sm:text-start font-bold">
                <span className="text-amber-500">کارت طلایی</span> امداد خودرو
                دارید؟
              </p>
              <p className="text-white/70 text-xl md:text-2xl max-w-[550px] !leading-8">
                بمدت یک‌سال هر جا توی جاده گیر کردی و یا به خدمات امداد خودرویی
                نیاز داشتی، ما{" "}
                <span className="text-green-500 font-medium">رایگان</span> در
                کنارتیم!
              </p>
            </div>
            <div className="flex sm:flex-col gap-4">
              <Button variant="primary" asChild>
                <Link
                  href="/premium-card"
                  className="btn btn-dark w-1/2 text-center sm:min-w-40"
                >
                  دریافت کارت طلایی
                </Link>
              </Button>
              <Button variant="destructive" asChild>
                <Link
                  href="/services"
                  className="btn btn-white w-1/2 text-center sm:min-w-40"
                >
                  خدمات امداد فوری
                </Link>
              </Button>
            </div>
          </div>

          <hr className="my-8 md:my-12 h-1 w-full bg-white/20 rounded-lg border-0" />

          <div className="flex flex-wrap gap-y-10 sm:-mx-3">
            <div className="w-full lg:w-1/2 xl:w-1/3 sm:px-3">
              <p className="font-bold text-white mb-4">خدمات امداد فوری</p>
              <ul className="grid grid-cols-2 gap-4">
                {ServicesData.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={service.url}
                      className="font-light text-white/80 transition hover:text-primary"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2 xl:w-5/12 sm:px-3">
              <p className="font-bold text-white mb-4">مقاله های مفید</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li>
                  <Link
                    href="/blog/sth"
                    className="font-light text-white/80 transition hover:text-primary"
                  >
                    مقاله مفید شماره ۱
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/sth"
                    className="font-light text-white/80 transition hover:text-primary"
                  >
                    مقاله مفید شماره ۲
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/sth"
                    className="font-light text-white/80 transition hover:text-primary"
                  >
                    مقاله مفید شماره ۳
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/sth"
                    className="font-light text-white/80 transition hover:text-primary"
                  >
                    مقاله مفید شماره ۴
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/sth"
                    className="font-light text-white/80 transition hover:text-primary"
                  >
                    مقاله مفید شماره ۵
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/sth"
                    className="font-light text-white/80 transition hover:text-primary"
                  >
                    مقاله مفید شماره ۶
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/sth"
                    className="font-light text-white/80 transition hover:text-primary"
                  >
                    مقاله مفید شماره ۷
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/sth"
                    className="font-light text-white/80 transition hover:text-primary"
                  >
                    مقاله مفید شماره ۸
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/sth"
                    className="font-light text-white/80 transition hover:text-primary"
                  >
                    مقاله مفید شماره ۹
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/sth"
                    className="font-light text-white/80 transition hover:text-primary"
                  >
                    مقاله مفید شماره ۱۰
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full xl:w-1/4 sm:px-3">
              <ul className="space-y-4 mb-6">
                <li>
                  <a
                    href="tel:+98"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center text-white"
                  >
                    <PhoneCall className="min-w-6 text-center me-2 sm:me-3" />
                    <span className="[direction:ltr] track_calls">
                      ۰۲۱ ۱۲۳ ۴۵ ۶۷
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+98"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center text-white"
                  >
                    <TabletSmartphone className="min-w-6 text-center me-2 sm:me-3" />
                    <span className="[direction:ltr] track_calls">
                      ۰۹۱۲ ۱۲۳ ۴۵ ۶۷
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@emdadfori.com"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center text-white"
                  >
                    <Mail className="min-w-6 text-center me-2 sm:me-3" />
                    <span className="[direction:ltr]">info@emdadfori.com</span>
                  </a>
                </li>
                <li>
                  <p className="flex text-white">
                    <MapPin className="min-w-6 text-center me-2 sm:me-3" />
                    <span>
                      تهران - منیریه - ادامه‌ی آدرس شما - در این قسمت - قرار
                      خواهد گرفت
                    </span>
                  </p>
                </li>
              </ul>

              <ul className="flex justify-center gap-4">
                <li>
                  <a
                    href="https://web.whatsapp.com/send?phone=+989015854850"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="rounded-full w-10 h-10 bg-white/30 flex items-center justify-center text-white text-lg transition hover:bg-black"
                  >
                    {/* <FaWhatsapp /> */}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/arman_novin_plastic/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="rounded-full w-10 h-10 bg-white/30 flex items-center justify-center text-white text-lg transition hover:bg-black"
                  >
                    {/* <FaInstagram /> */}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/armannovinplasticpart"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="rounded-full w-10 h-10 bg-white/30 flex items-center justify-center text-white text-lg transition hover:bg-black"
                  >
                    {/* <FaFacebook /> */}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/armannovinplasticpart"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="rounded-full w-10 h-10 bg-white/30 flex items-center justify-center text-white text-lg transition hover:bg-black"
                  >
                    {/* <FaLinkedin /> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <FooterBrands />

          <hr className="my-8 md:my-12 h-1 w-full bg-white/20 rounded-lg border-0" />

          <div className="flex text-center flex-col sm:[flex-direction:unset] sm:items-center sm:justify-between gap-y-6 pb-8 md:pb-12">
            <p className="text-white/80">
              &copy; کلیه حقوق برای شرکت امداد فوری محفوظ است.
            </p>
            <ul className="flex justify-center gap-4">
              <li>
                <a
                  className="text-white/80 transition hover:text-primary"
                  href="/sitemap.xml"
                >
                  نقشه سایت
                </a>
              </li>
              <li>
                <span className="text-white">|</span>
              </li>
              <li>
                <a
                  className="text-white/80 transition hover:text-primary"
                  href="https://navidbehroozi.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  طراحی، سئو و توسعه
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* <a
        href="tel:+989122863542"
        rel="noopener noreferrer nofollow"
        className="callNow"
      >
        <span className="callNowBtn openCallBox track_calls"></span>
      </a> */}
    </>
  );
};

export default MainFooter;
