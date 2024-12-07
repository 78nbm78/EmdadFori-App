import Image from "next/image";
import Link from "next/link";
import LogoBlack from "@/public/images/logo.png";
import NeedBtn from "./footer/NeedBtn";
import FooterBrands from "./footer/FooterBrands";
import FooterGoldCard from "./footer/FooterGoldCard";
import FooterContact from "./footer/FooterContact";
import { IServiceType } from "@/interfaces/Services";
import { IBrandType } from "@/interfaces/Brand";
import { IBlogType } from "@/interfaces/Blog";

interface IProps {
  services: IServiceType[];
  brands: IBrandType[];
  blogs: IBlogType[];
}

const MainFooter = ({ services, brands, blogs }: IProps) => {
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

          <FooterGoldCard />

          <hr className="my-8 md:my-12 h-1 w-full bg-white/20 rounded-lg border-0" />

          <div className="flex flex-wrap gap-y-10 sm:-mx-3">
            <div className="w-full lg:w-1/2 xl:w-1/3 sm:px-3">
              <p className="font-bold text-white mb-4">خدمات امداد فوری</p>
              <ul className="grid grid-cols-2 gap-4">
                {services?.length ? (
                  services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="font-light text-white/80 transition hover:text-primary"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>موردی یافت نشد.</li>
                )}
              </ul>
            </div>

            <div className="w-full lg:w-1/2 xl:w-5/12 sm:px-3">
              <p className="font-bold text-white mb-4">مقاله های مفید</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blogs?.length ? (
                  blogs.map((blog) => (
                    <li key={blog.id}>
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="font-light text-white/80 transition hover:text-primary"
                      >
                        {blog.googleTitle || blog.title || ""}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>مقاله ای یافت نشد</li>
                )}
              </ul>
            </div>

            <div className="w-full xl:w-1/4 sm:px-3">
              <FooterContact />
            </div>
          </div>

          <FooterBrands brands={brands || []} />

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
