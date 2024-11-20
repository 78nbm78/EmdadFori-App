"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { IExpertList } from "../_core/interfaces";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    accessorKey: "natianalCode",
    header: "کد ملی",
  },
  {
    accessorKey: "mobile",
    header: "موبایل",
  },
  {
    accessorKey: "jobsCount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          تعداد جاب ها
          <ArrowUpDown className="h-4 w-4" />
        </Button>
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
            <DropdownMenuLabel>اقدامات</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              dir="rtl"
              onClick={() => navigator.clipboard.writeText(expert.firstName)}
            >
              کپی اسم کوچک
            </DropdownMenuItem>
            <DropdownMenuItem dir="rtl">نمایش جزئیات متخصص</DropdownMenuItem>
            <DropdownMenuItem dir="rtl">ویرایش اطلاعات</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem dir="rtl" className="text-red-600">
              حذف
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
