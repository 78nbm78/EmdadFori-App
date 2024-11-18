import AdminLayout from "@/layouts/AdminLayout";
import AdminPageTitle from "./_components/AdminPageTitle";
import { Card, CardContent } from "@/components/ui/card";

const AdminPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle
        title="داشبورد"
        description="سلام ادمین! به داشبورد امداد فوری خوش آمدید"
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

export default AdminPage;
