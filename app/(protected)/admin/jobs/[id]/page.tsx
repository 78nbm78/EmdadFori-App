import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../_components/AdminPageTitle";

interface IProps {
  params: { id: string };
}

const AdminSingleJobPage = ({ params }: IProps) => {
  console.log(params.id);

  return (
    <AdminLayout>
      <AdminPageTitle title="جزئیات درخواست ثبت شده" description="..." />

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

export default AdminSingleJobPage;
