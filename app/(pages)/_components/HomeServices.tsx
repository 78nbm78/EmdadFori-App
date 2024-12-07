import { IServiceType } from "@/interfaces/Services";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  services: IServiceType[];
}

const HomeServices = ({ services }: IProps) => {
  return (
    <section className="wrapper bg-[#f5f5f5]">
      <div className="container">
        <div className="flex flex-col items-center mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black text-center">
            خدمات امداد فوری
          </h2>
          <hr className="custom-hr" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {services ? (
            services.map((service) => (
              <Link
                key={service.id}
                className="flex flex-col bg-slate-800 justify-center items-center text-center p-4 pb-5 rounded-xl gap-4 transition hover:bg-slate-950"
                href={`/services/${service.slug}`}
              >
                <Image
                  src={
                    service.greenIcon ||
                    service.thumbnail ||
                    "/images/default-cover.jpg"
                  }
                  alt={service.title}
                  title={service.title}
                  width={44}
                  height={44}
                  className="inline-block"
                />
                <h3 className="text-sm sm:text-base text-white font-medium">
                  {service.title}
                </h3>
              </Link>
            ))
          ) : (
            <>موردی یافت نشد!</>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
