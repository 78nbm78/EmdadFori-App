import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CarFront,
  Check,
  CircleX,
  Clock,
  DollarSign,
  Eye,
  Users,
} from "lucide-react";
import Link from "next/link";

const AdminHomeStatus = () => {
  return (
    <section className="flex flex-wrap -mx-3">
      <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mt-6">
        <Card className="h-full">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between text-slate-600 mb-5 sm:mb-6">
              <span className="font-medium text-sm">درآمد کل</span>
              <DollarSign />
            </div>
            <div>
              <p className="flex items-end gap-1">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold">
                  240,000,000
                </span>
                <small>ریال</small>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mt-6">
        <Card className="h-full">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between text-slate-600 mb-5 sm:mb-6">
              <span className="font-medium text-sm">تعداد کاربران</span>
              <Users />
            </div>
            <div>
              <p className="flex items-end gap-1">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold">
                  1924
                </span>
                <small>نفر</small>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mt-6">
        <Card className="h-full">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between text-slate-600 mb-5 sm:mb-6">
              <span className="font-medium text-sm">تعداد متخصصین</span>
              <CarFront />
            </div>
            <div>
              <p className="flex items-end gap-1">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold">
                  55
                </span>
                <small>نفر</small>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full lg:w-2/3 px-3 mt-6">
        <Card className="h-full">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
              <p className="font-medium text-sm mb-3 md:mb-0">
                آخرین درخواست‌های امداد
              </p>
              <Button asChild variant="default" size="sm">
                <Link href="/admin/jobs">نمایش همه</Link>
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-start">نام مشتری</TableHead>
                  <TableHead className="text-center">تاریخ</TableHead>
                  <TableHead className="text-center">خدمت</TableHead>
                  <TableHead className="text-center">توسط</TableHead>
                  <TableHead className="text-center">وضعیت</TableHead>
                  <TableHead className="text-end">جزئیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-start">
                    <p className="text-xs font-medium mb-1">حمیدرضا اسدآبادی</p>
                    <p className="text-sm">09397967117</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <p className="text-xs">1403/12/24</p>
                    <p className="text-xs">14:41</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <p className="text-xs">حمل به تعمیرگاه</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <Link
                      href={`/admin/experts/${2}`}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      محسن رضایی
                    </Link>
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="text-green-600 m-auto" size="20" />
                  </TableCell>
                  <TableCell className="text-end">
                    <Button asChild variant="outline" size="icon">
                      <Link href={`/admin/jobs/${1}`}>
                        <Eye />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-start">
                    <p className="text-xs font-medium mb-1">نوید بهروزی</p>
                    <p className="text-sm">09121234567</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <p className="text-xs">1403/12/24</p>
                    <p className="text-xs">14:41</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <p className="text-xs">باطری به باطری</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <Link
                      href={`/admin/experts/${2}`}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      محسن رضایی
                    </Link>
                  </TableCell>
                  <TableCell className="text-center">
                    <Clock className="text-amber-500 m-auto" size="20" />
                  </TableCell>
                  <TableCell className="text-end">
                    <Button asChild variant="outline" size="icon">
                      <Link href={`/admin/jobs/${1}`}>
                        <Eye />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-start">
                    <p className="text-xs font-medium mb-1">محمدرضا جراحی</p>
                    <p className="text-sm">09121234567</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <p className="text-xs">1403/12/24</p>
                    <p className="text-xs">14:41</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <p className="text-xs">سوخت رسانی</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <Link
                      href={`/admin/experts/${2}`}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      محسن رضایی
                    </Link>
                  </TableCell>
                  <TableCell className="text-center">
                    <CircleX className="text-red-500 m-auto" size="20" />
                  </TableCell>
                  <TableCell className="text-end">
                    <Button asChild variant="outline" size="icon">
                      <Link href={`/admin/jobs/${1}`}>
                        <Eye />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="w-full lg:w-1/3 px-3 mt-6">
        <Card className="h-full">
          <CardContent className="pt-6">
            <p className="font-medium text-sm mb-4">نظرات پاسخ داده نشده</p>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-start">کاربر</TableHead>
                  <TableHead className="text-center">تاریخ</TableHead>
                  <TableHead className="text-center">صفحه</TableHead>
                  <TableHead className="text-end">جزئیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-start">
                    <p className="text-xs font-medium">محبوبه صفری</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <p className="text-xs">1403/12/24 | 14:41</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <a
                      href="/"
                      target="_blank"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      امداد هایما
                    </a>
                  </TableCell>
                  <TableCell className="text-end">
                    <Button asChild variant="outline" size="icon">
                      <Link href={`/admin/comments/${1}`}>
                        <Eye />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-start">
                    <p className="text-xs font-medium">علیرضا درخشانی</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <p className="text-xs">1403/12/24 | 14:41</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <a
                      href="/"
                      target="_blank"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      تعمیر موتور
                    </a>
                  </TableCell>
                  <TableCell className="text-end">
                    <Button asChild variant="outline" size="icon">
                      <Link href={`/admin/comments/${1}`}>
                        <Eye />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-start">
                    <p className="text-xs font-medium">زهرا قاسمی</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <p className="text-xs">1403/12/24 | 14:41</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <a
                      href="/"
                      target="_blank"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      صافکاری pdr
                    </a>
                  </TableCell>
                  <TableCell className="text-end">
                    <Button asChild variant="outline" size="icon">
                      <Link href={`/admin/comments/${1}`}>
                        <Eye />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AdminHomeStatus;
