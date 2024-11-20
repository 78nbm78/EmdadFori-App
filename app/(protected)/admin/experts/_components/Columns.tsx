"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { IExpertList } from "../_core/interfaces";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { DateToJalali } from "@/utils/DateToJalali";

export const columns: ColumnDef<IExpertList>[] = [
  {
    accessorKey: "firstName",
    header: "نام",
  },
  {
    accessorKey: "lastName",
    header: "نام خانوادگی",
  },
  {
    accessorKey: "nationalCode",
    header: "کد ملی",
  },
  {
    accessorKey: "mobile",
    header: "موبایل",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          تاریخ ثبت نام
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const expert = row.original;
      return <DateToJalali date={expert.createdAt} />;
    },
  },
  {
    accessorKey: "isActive",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting()}>
          وضعیت اکانت
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const expert = row.original;
      return expert.isActive ? (
        <Badge variant="success">تایید شده</Badge>
      ) : (
        <Badge variant="destructive">تایید نشده</Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const expert = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">باز کردن منو</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {/* <DropdownMenuLabel>اقدامات</DropdownMenuLabel> */}
            <DropdownMenuItem
              dir="rtl"
              onClick={() => console.log(`expertId => ${expert.expertId}`)}
            >
              نمایش جزئیات بیشتر
            </DropdownMenuItem>
            <DropdownMenuItem dir="rtl">ویرایش اطلاعات</DropdownMenuItem>
            <DropdownMenuItem dir="rtl">تایید حساب</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem dir="rtl" className="text-red-600">
              حذف متخصص
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
