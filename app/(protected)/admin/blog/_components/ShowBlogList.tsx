"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IBlogType } from "@/interfaces/Blog";
import { DateToJalali } from "@/utils/DateToJalali";
import { Check, PenBox, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeleteBlogBtn from "./DeleteBlogBtn";

interface IProps {
  blogs: IBlogType[];
  accessToken: string;
}

const ShowBlogList: React.FC<IProps> = ({ blogs, accessToken }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-start">عکس شاخص</TableHead>
          <TableHead className="text-center">عنوان</TableHead>
          <TableHead className="text-center">تاریخ آخرین ویرایش</TableHead>
          <TableHead className="text-center">تعداد کامنت ها</TableHead>
          <TableHead className="text-center">وضعیت انتشار</TableHead>
          <TableHead className="text-center">اقدامات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs?.length ? (
          blogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell className="text-start text-xs sm:text-sm">
                <Image
                  src={
                    (blog.thumbnail as string) || "/images/default-cover.jpg"
                  }
                  width={48}
                  height={48}
                  alt={blog.title}
                  className="inline-block w-12 h-12 rounded-full object-cover object-center"
                />
              </TableCell>
              <TableCell className="text-center text-xs sm:text-sm">
                {blog.title}
              </TableCell>
              <TableCell className="text-center text-xs sm:text-sm">
                {DateToJalali({ date: blog.updatedAt })}
              </TableCell>
              <TableCell className="text-center text-xs sm:text-sm">
                {blog._count?.comments}
              </TableCell>
              <TableCell className="text-center">
                {blog.isPublished ? (
                  <Check className="text-green-600 m-auto" size="20" />
                ) : (
                  <X className="text-red-500 m-auto" size="20" />
                )}
              </TableCell>
              <TableCell className="text-end flex gap-4">
                <Button asChild variant="outline" size="icon">
                  <Link href={`/admin/blog/edit/${blog.slug}`}>
                    <PenBox />
                  </Link>
                </Button>
                <DeleteBlogBtn
                  accessToken={accessToken}
                  pageSlug={blog.slug}
                  pageTitle={blog.title}
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} className="text-center">
              مقاله ای یافت نشد!
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ShowBlogList;
