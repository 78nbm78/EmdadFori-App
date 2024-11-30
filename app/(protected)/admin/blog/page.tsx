import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../_components/AdminPageTitle";

const AdminBlogPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle title="بلاگ" description="مدیریت اخبار و مقالات" />

      <section>
        <Card>
          <CardContent className="pt-6">لیست مقالات</CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminBlogPage;
