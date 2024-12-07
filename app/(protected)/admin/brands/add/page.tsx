import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../_components/AdminPageTitle";
import { getCookieByKey } from "@/actions/cookie";
import AddBrandForm from "../_components/AddBrandForm";

const AdminAddBrandPage = async () => {
  const token = await getCookieByKey("token");

  return (
    <AdminLayout>
      <AdminPageTitle title={`افزودن برند جدید`} description="..." />

      <section>
        <Card>
          <CardContent className="pt-6">
            <AddBrandForm accessToken={token || ""} />
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminAddBrandPage;
