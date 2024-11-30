import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../_components/AdminPageTitle";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Check, CircleX, Clock, Eye } from "lucide-react";

const AdminJobsPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle
        title="درخواست‌های امداد"
        description="مدیریت درخواست‌های امداد خودروی ثبت شده توسط کاربران"
      />

      <section>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <p className="font-bold">تمام درخواست ها</p>
              <Button variant="secondary" size="sm" asChild>
                <Link href="/admin/jobs/add">افزودن درخواست جدید</Link>
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-start">نام مشتری</TableHead>
                  <TableHead className="text-center">تاریخ</TableHead>
                  <TableHead className="text-center">مبدا</TableHead>
                  <TableHead className="text-center">مقصد</TableHead>
                  <TableHead className="text-center">خدمت</TableHead>
                  <TableHead className="text-center">توسط</TableHead>
                  <TableHead className="text-center">هزینه</TableHead>
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
                    <p className="text-xs">تهران، سعادت آباد</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <p className="text-xs">کرج، گوهردشت</p>
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
                    <p className="text-xs">
                      2,200,000 <small>ریال</small>
                    </p>
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
                    <p className="text-xs">کرج، گوهردشت</p>
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
                    <p className="text-xs">
                      1,000,000 <small>ریال</small>
                    </p>
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
                    <p className="text-xs">کرج، گوهردشت</p>
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
                    <p className="text-xs">
                      1,500,000 <small>ریال</small>
                    </p>
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
      </section>
    </AdminLayout>
  );
};

export default AdminJobsPage;
