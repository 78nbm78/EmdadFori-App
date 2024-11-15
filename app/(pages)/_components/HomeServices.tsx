import ServicesData from "@/mock/ServicesData.json";
import Image from "next/image";
import Link from "next/link";

const HomeServices = () => {
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
          {ServicesData.map((service) => (
            <Link
              key={service.id}
              className="flex flex-col bg-slate-800 justify-center items-center text-center p-4 pb-5 rounded-xl gap-4 transition hover:bg-slate-950"
              href={service.url}
            >
              <Image
                src={service.greenIcon}
                alt={service.label}
                title={service.label}
                width={44}
                height={44}
                className="inline-block"
              />
              <h3 className="text-sm sm:text-base text-white font-medium">
                {service.label}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
