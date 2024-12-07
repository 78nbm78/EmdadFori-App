import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../_components/AdminPageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCookieByKey } from "@/actions/cookie";
import { AdminGetBrands } from "@/services/Brands";
import ShowBrandsList from "./_components/ShowBrandsList";

const AdminBrandsPage = async () => {
  const token = await getCookieByKey("token");
  const brands = await AdminGetBrands(token || "");

  return (
    <AdminLayout>
      <AdminPageTitle
        title="مدیریت برندها"
        description="مدیریت محتوای برندهای خودرو"
      />

      <section>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <p className="font-bold mb-0">لیست برندها</p>
              <Button asChild variant="secondary" size="sm">
                <Link href="/admin/brands/add">افزودن برند جدید</Link>
              </Button>
            </div>

            <ShowBrandsList
              brands={brands?.data || []}
              accessToken={token || ""}
            />
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminBrandsPage;
