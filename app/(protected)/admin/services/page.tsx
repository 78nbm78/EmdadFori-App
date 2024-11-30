import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../_components/AdminPageTitle";

const AdminServicesPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle
        title="مدیریت خدمات"
        description="مدیریت خدمات امداد فوری"
      />

      <section>
        <Card>
          <CardContent className="pt-6">لیست خدمات</CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminServicesPage;
