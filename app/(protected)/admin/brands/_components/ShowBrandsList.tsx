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
import { DateToJalali } from "@/utils/DateToJalali";
import { Check, PenBox, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IBrandType } from "@/interfaces/Brand";
import DeleteBrandBtn from "./DeleteBrandBtn";

interface IProps {
  brands: IBrandType[];
  accessToken: string;
}

const ShowBrandsList: React.FC<IProps> = ({ brands, accessToken }) => {
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
        {brands?.length ? (
          brands.map((brand) => (
            <TableRow key={brand.id}>
              <TableCell className="text-start text-xs sm:text-sm">
                <Image
                  src={
                    (brand.thumbnail as string) || "/images/default-cover.jpg"
                  }
                  width={48}
                  height={48}
                  alt={brand.title}
                  className="inline-block w-12 h-12 rounded-full object-cover object-center"
                />
              </TableCell>
              <TableCell className="text-center text-xs sm:text-sm">
                {brand.title}
              </TableCell>
              <TableCell className="text-center text-xs sm:text-sm">
                {DateToJalali({ date: brand.updatedAt })}
              </TableCell>
              <TableCell className="text-center text-xs sm:text-sm">
                {brand._count?.comments}
              </TableCell>
              <TableCell className="text-center">
                {brand.isPublished ? (
                  <Check className="text-green-600 m-auto" size="20" />
                ) : (
                  <X className="text-red-500 m-auto" size="20" />
                )}
              </TableCell>
              <TableCell className="text-end flex gap-4">
                <Button asChild variant="outline" size="icon">
                  <Link href={`/admin/brands/edit/${brand.slug}`}>
                    <PenBox />
                  </Link>
                </Button>
                <DeleteBrandBtn
                  accessToken={accessToken}
                  pageSlug={brand.slug}
                  pageTitle={brand.title}
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} className="text-center">
              برندی یافت نشد!
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ShowBrandsList;
