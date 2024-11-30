import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../_components/AdminPageTitle";

const AdminPremiumCardPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle
        title="درخواست‌های کارت طلایی"
        description="مدیریت درخواست‌های کارت طلایی ثبت شده توسط کاربران"
      />

      <section>
        <Card>
          <CardContent className="pt-6">
            موردی برای نمایش وجود ندارد!
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminPremiumCardPage;
