import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../../_components/AdminPageTitle";

interface IProps {
  params: { slug: string };
}

const AdminEditServicePage = ({ params }: IProps) => {
  return (
    <AdminLayout>
      <AdminPageTitle title={`ویرایش ${params.slug}`} description="..." />

      <section>
        <Card>
          <CardContent className="pt-6">فرم افزودن خدمت جدید</CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminEditServicePage;
