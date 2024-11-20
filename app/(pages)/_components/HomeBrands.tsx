import Image from "next/image";
import BrandsData from "@/mock/BrandsData.json";

const HomeBrands = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="flex flex-col items-center mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black text-center">
            برندهای تحت پوشش امداد فوری
          </h2>
          <hr className="custom-hr !mb-0" />
        </div>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {BrandsData.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col gap-1 justify-center items-center text-center border border-slate-200 px-2 pt-1 pb-2 rounded-lg cursor-pointer transition hover:bg-primary/20 hover:border-primary"
            >
              <Image
                src={brand.icon}
                width={50}
                height={50}
                alt={`امداد ${brand.label}`}
                title={`امداد ${brand.label}`}
              />
              <span className="font-medium text-sm">امداد {brand.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBrands;
