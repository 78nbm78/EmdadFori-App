import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../_components/AdminPageTitle";

const AdminBrandsPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle
        title="مدیریت برندها"
        description="مدیریت محتوای برندهای خودرو"
      />

      <section>
        <Card>
          <CardContent className="pt-6">
            این یک کامپوننت تست می‌باشد.
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminBrandsPage;
