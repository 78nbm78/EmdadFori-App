import PageTitle from "@/components/shared/PageTitle";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import { Clock, MapPin, PhoneCall, TabletSmartphone } from "lucide-react";

export const metadata = {
  title: "تماس با ما | امداد فوری",
  alternates: {
    canonical: `${process?.env?.NEXT_PUBLIC_URL}/contact`,
  },
};

const list = [
  { id: 1, title: "امداد فوری", slug: "/" },
  { id: 2, title: "تماس با ما", slug: "/contact" },
];

const ContactPage = () => {
  return (
    <MainLayout>
      <PageTitle title="تماس با ما" list={list} />

      <section className="wrapper">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="order-2 lg:order-1 overflow-hidden rounded-2xl w-full h-full shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3879.909976707471!2d51.33786399825881!3d35.699994138223566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1731846897345!5m2!1sen!2s"
                allowFullScreen
                className="block w-full h-full min-h-80 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="order-1 lg:order-2 bg-primary/15 dark:bg-stone-800 rounded-2xl shadow-lg py-6 px-5 border-[1px] border-red-200 dark:border-stone-700 space-y-4 lg:space-y-6">
              <div className="relative pr-8">
                <PhoneCall className="absolute right-0 top-1 text-primary" />
                <p className="text-stone-500 dark:text-white/70">
                  شماره ثابت:{" "}
                  <a
                    href="tel:+9821"
                    className="inline-block mr-1 md:mr-2 [direction:ltr] text-black dark:text-white track_calls"
                    rel="noopener noreferrer nofollow"
                  >
                    ۰۲۱ ۱۲۳ ۴۵ ۶۷
                  </a>
                </p>
              </div>
              <div className="relative pr-8">
                <TabletSmartphone className="absolute right-0 top-1 text-primary" />
                <p className="text-stone-500 dark:text-white/70">
                  موبایل ۱ :{" "}
                  <a
                    href="tel:+98"
                    className="inline-block mr-1 md:mr-2 [direction:ltr] text-black dark:text-white track_calls"
                    rel="noopener noreferrer nofollow"
                  >
                    ۰۲۱ ۵۶۳ ۹۱۵ ۹۵
                  </a>
                  <br />
                  موبایل ۲ :{" "}
                  <a
                    href="tel:+98"
                    className="inline-block mr-1 md:mr-2 [direction:ltr] text-black dark:text-white track_calls"
                    rel="noopener noreferrer nofollow"
                  >
                    ۰۲۱ ۵۶۳ ۹۱۵ ۹۶
                  </a>
                </p>
              </div>
              <div className="relative pr-8">
                <MapPin className="absolute right-0 top-1 text-primary" />
                <p className="text-black dark:text-white">
                  تهران - منیریه - ادامه‌ی آدرس شما - در این قسمت - قرار خواهد
                  گرفت
                </p>
              </div>
              <div className="relative pr-8">
                <Clock className="absolute right-0 top-1 text-primary" />
                <p className="text-black dark:text-white">
                  کل هفته ۲۴ ساعت شبانه روز
                </p>
              </div>

              <div className="!mt-6 sm:flex sm:gap-4">
                <Button variant="default" asChild>
                  <a
                    href="waze://?ll=35.6999552,51.3375118&amp;navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="btn btn-dark w-full sm:w-fit text-center py-2 mb-4 sm:mb-0"
                  >
                    مسیریابی با Waze
                  </a>
                </Button>

                <Button variant="default" asChild>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&amp;destination=35.6999552,51.3375118"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="btn btn-dark w-full sm:w-fit text-center py-2"
                  >
                    مسیریابی با Google Map
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
