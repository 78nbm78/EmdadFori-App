import Image from "next/image";
import Link from "next/link";
import { IServiceType } from "@/interfaces/Services";

const ShowServices = ({ services }: { services: IServiceType[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {services?.map((service) => (
        <Link
          key={service.id}
          className="flex flex-col bg-slate-800 justify-center items-center text-center p-4 pb-5 rounded-xl gap-4 transition hover:bg-slate-950"
          href={`/services/${service.slug || ""}`}
        >
          <Image
            src={
              service.greenIcon ||
              service.thumbnail ||
              "/images/default-cover.jpg"
            }
            alt={service.title || ""}
            title={service.title || ""}
            width={44}
            height={44}
            className="inline-block"
          />
          <h3 className="text-sm sm:text-base text-white font-medium">
            {service.title || ""}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default ShowServices;
