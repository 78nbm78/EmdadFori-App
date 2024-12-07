import { IBrandType } from "@/interfaces/Brand";
import Image from "next/image";
import Link from "next/link";

const ShowBrands = ({ brands }: { brands: IBrandType[] }) => {
  return (
    <section className="wrapper">
      <div className="container">
        {brands?.length ? (
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brands/${brand.slug}`}
                className="flex flex-col gap-1 justify-center items-center text-center border border-slate-200 px-2 pt-1 pb-2 rounded-lg cursor-pointer transition hover:bg-primary/20 hover:border-primary"
              >
                <Image
                  src={
                    (brand.thumbnail as string) || "/images/default-cover.jpg"
                  }
                  width={50}
                  height={50}
                  alt={`امداد ${brand.title}`}
                  title={`امداد ${brand.title}`}
                />
                <span className="font-medium text-sm">امداد {brand.title}</span>
              </Link>
            ))}
          </div>
        ) : (
          <>موردی یافت نشد!</>
        )}
      </div>
    </section>
  );
};

export default ShowBrands;
