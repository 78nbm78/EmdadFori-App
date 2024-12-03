"use client";

import { IBlogType } from "@/interfaces/Blog";
import { DateToJalali } from "@/utils/DateToJalali";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  blogs: IBlogType[];
}

const ShowBlogList: React.FC<IProps> = ({ blogs }) => {
  console.log(blogs);

  return (
    <ul className="space-y-2">
      {blogs?.length ? (
        blogs.map((blog) => (
          <li
            key={blog.id}
            className="flex items-center justify-between border-b pb-2 last:border-b-0 last:pb-0"
          >
            <Image
              src={blog.thumbnail || "/images/default-cover.jpg"}
              alt={blog.title}
              width={48}
              height={48}
              className="inline-block rounded-full w-12 h-12 object-cover object-center"
            />
            <a
              href={`/blog/${blog.slug}`}
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              {blog.title}
            </a>
            <p className="mb-0">{DateToJalali({ date: blog.updatedAt })}</p>
            <p className="mb-0">{blog._count?.comments}</p>
            <Link
              className="text-blue-600 hover:underline"
              href={`/admin/blog/edit/${blog.slug}`}
            >
              ویرایش
            </Link>
          </li>
        ))
      ) : (
        <li className="text-center">صفحه ای یافت نشد!</li>
      )}
    </ul>
  );
};

export default ShowBlogList;
