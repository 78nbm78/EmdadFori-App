import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../_components/AdminPageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AdminBlogPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle title="بلاگ" description="مدیریت اخبار و مقالات" />

      <section>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <p className="font-bold">لیست مقالات</p>
              <Button asChild variant="secondary" size="sm">
                <Link href="/admin/blog/add">افزودن مقاله جدید</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminBlogPage;
