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
import { IServiceType } from "@/interfaces/Services";
import DeleteServiceBtn from "./DeleteServiceBtn";

interface IProps {
  services: IServiceType[];
  accessToken: string;
}

const ShowServicesList: React.FC<IProps> = ({ services, accessToken }) => {
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
        {services?.length ? (
          services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="text-start text-xs sm:text-sm">
                <Image
                  src={service.thumbnail || "/images/default-cover.jpg"}
                  width={48}
                  height={48}
                  alt={service.title}
                  className="inline-block w-12 h-12 rounded-full object-cover object-center"
                />
              </TableCell>
              <TableCell className="text-center text-xs sm:text-sm">
                {service.title}
              </TableCell>
              <TableCell className="text-center text-xs sm:text-sm">
                {DateToJalali({ date: service.updatedAt })}
              </TableCell>
              <TableCell className="text-center text-xs sm:text-sm">
                {service._count?.comments}
              </TableCell>
              <TableCell className="text-center">
                {service.isPublished ? (
                  <Check className="text-green-600 m-auto" size="20" />
                ) : (
                  <X className="text-red-500 m-auto" size="20" />
                )}
              </TableCell>
              <TableCell className="text-end flex gap-4">
                <Button asChild variant="outline" size="icon">
                  <Link href={`/admin/services/edit/${service.slug}`}>
                    <PenBox />
                  </Link>
                </Button>
                <DeleteServiceBtn
                  accessToken={accessToken}
                  pageSlug={service.slug}
                  pageTitle={service.title}
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

export default ShowServicesList;
