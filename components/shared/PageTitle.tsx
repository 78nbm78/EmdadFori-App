import Link from "next/link";

export interface IBreadCrumb {
  id?: number;
  title: string;
  slug: string;
}

type IProps = {
  title: string;
  list: IBreadCrumb[];
  smallTitle?: boolean;
};

const PageTitle = ({ title, list, smallTitle = false }: IProps) => {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      ...list.map((item) => ({
        "@type": "ListItem",
        position: item.id,
        name: item.title,
        item: item.slug,
      })),
    ],
  };

  return (
    <section className="py-12 md:py-16 bg-neutral-300">
      <div className="container m-auto">
        <div className="md:flex md:items-center md:justify-between">
          <h1
            className={`${smallTitle ? "text-xl md:text-2xl" : "text-2xl sm:text-3xl lg:text-4xl"} mb-4 md:mb-0 text-center font-black text-neutral-800 dark:text-white`}
          >
            {title}
          </h1>
          <ul className="text-center">
            {list.map((item: IBreadCrumb) => (
              <li
                className="inline-block after:inline-block after:w-[1px] after:h-4 after:align-middle after:bg-neutral-400 after:mx-4 last-of-type:after:hidden"
                key={item.id}
              >
                <Link
                  className="transition text-neutral-500 dark:text-neutral-300 hover:text-red-500"
                  href={item.slug}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default PageTitle;
