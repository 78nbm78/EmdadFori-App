import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../_components/AdminPageTitle";
import AddServiceForm from "../_components/AddServiceForm";
import { getCookieByKey } from "@/actions/cookie";

const AdminAddServicePage = async () => {
  const token = await getCookieByKey("token");

  return (
    <AdminLayout>
      <AdminPageTitle title="افزودن خدمت جدید" description="..." />

      <section>
        <Card>
          <CardContent className="pt-6">
            <AddServiceForm accessToken={token || ""} />
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminAddServicePage;
