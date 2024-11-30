import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../_components/AdminPageTitle";

const AdminAddBrandPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle title={`افزودن برند جدید`} description="..." />

      <section>
        <Card>
          <CardContent className="pt-6">...</CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminAddBrandPage;
