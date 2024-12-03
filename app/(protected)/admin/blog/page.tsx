import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../_components/AdminPageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShowBlogList from "./_components/ShowBlogList";
import { GetBlogs } from "@/services/Blog";

const AdminBlogPage = async () => {
  const blogs = await GetBlogs();

  return (
    <AdminLayout>
      <AdminPageTitle title="بلاگ" description="مدیریت اخبار و مقالات" />

      <section>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <p className="font-bold mb-0">لیست مقالات</p>
              <Button asChild variant="secondary" size="sm">
                <Link href="/admin/blog/add">افزودن مقاله جدید</Link>
              </Button>
            </div>

            <ShowBlogList blogs={blogs?.data || []} />
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminBlogPage;
