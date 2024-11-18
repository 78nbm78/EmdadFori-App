import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../_components/AdminPageTitle";

const AdminExpertsPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle
        title="لیست متخصصین"
        description="مدیریت متخصصین امداد فوری"
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

export default AdminExpertsPage;
