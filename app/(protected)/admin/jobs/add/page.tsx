import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../_components/AdminPageTitle";

const AdminAddJobPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle title="افزودن درخواست جدید" description="..." />

      <section>
        <Card>
          <CardContent className="pt-6">فرم افزودن درخواست جدید</CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminAddJobPage;
