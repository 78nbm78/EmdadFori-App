import DateToJalally from "@/utils/DateToJalally";
import Image from "next/image";
import Link from "next/link";

type IBlog = {
  title: string;
  slug: string;
  thumbnail: string | null;
  updatedAt: string;
};

const BlogCard = ({ title, slug, thumbnail, updatedAt }: IBlog) => {
  return (
    <Link
      href={slug}
      className={`relative block w-full h-fit overflow-hidden rounded-xl border border-slate-100 shadow-lg bg-white dark:bg-slate-700 pb-20`}
    >
      <Image
        src={thumbnail || "/images/default-cover.jpg"}
        width={320}
        height={240}
        alt={title}
        title={title}
        className="block w-full object-cover object-center min-h-40 sm:min-h-44"
      />
      <div className="absolute right-0 left-0 bottom-0 m-auto bg-white dark:bg-slate-700 p-4 transition">
        <h3 className="text-slate-700 dark:text-white font-medium mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-primary text-sm font-thin">
          <DateToJalally date={updatedAt} />
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
