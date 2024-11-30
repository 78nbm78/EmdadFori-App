import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../_components/AdminPageTitle";

const AdminAddBlogPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle title={`افزودن مقاله جدید`} description="..." />

      <section>
        <Card>
          <CardContent className="pt-6">...</CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminAddBlogPage;
