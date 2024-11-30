import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../../_components/AdminPageTitle";

interface IProps {
  params: { slug: string };
}

const AdminEditBrandPage = ({ params }: IProps) => {
  return (
    <AdminLayout>
      <AdminPageTitle title={`ویرایش برند ${params.slug}`} description="..." />

      <section>
        <Card>
          <CardContent className="pt-6">...</CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminEditBrandPage;
