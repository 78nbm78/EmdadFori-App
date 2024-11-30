import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../_components/AdminPageTitle";

const AdminAddServicePage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle title="افزودن خدمت جدید" description="..." />

      <section>
        <Card>
          <CardContent className="pt-6">فرم افزودن خدمت جدید</CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminAddServicePage;
