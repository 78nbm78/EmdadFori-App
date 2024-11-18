import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../_components/AdminPageTitle";

const AdminApplicantsPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle
        title="لیست کاربران"
        description="مدیریت کاربران ثبت نام شده در سایت"
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

export default AdminApplicantsPage;
