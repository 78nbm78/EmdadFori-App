import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../_components/AdminPageTitle";
import AddBlogForm from "../_components/AddBlogForm";
import { getCookieByKey } from "@/actions/cookie";

const AdminAddBlogPage = async () => {
  const token = await getCookieByKey("token");

  return (
    <AdminLayout>
      <AdminPageTitle
        title={`افزودن مقاله جدید`}
        description="یک مقاله جدید به بلاگ اضافه کنید."
      />

      <section>
        <Card>
          <CardContent className="pt-6">
            <AddBlogForm accessToken={token || ""} />
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminAddBlogPage;
