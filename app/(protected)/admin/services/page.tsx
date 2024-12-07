import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../_components/AdminPageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCookieByKey } from "@/actions/cookie";
import { AdminGetServices } from "@/services/Services";
import ShowServicesList from "./_components/ShowServicesList";

const AdminServicesPage = async () => {
  const token = await getCookieByKey("token");
  const services = await AdminGetServices(token || "");

  return (
    <AdminLayout>
      <AdminPageTitle
        title="مدیریت خدمات"
        description="مدیریت خدمات امداد فوری"
      />

      <section>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <p className="font-bold mb-0">لیست خدمات</p>
              <Button asChild variant="secondary" size="sm">
                <Link href="/admin/services/add">افزودن خدمت جدید</Link>
              </Button>
            </div>

            <ShowServicesList
              services={services?.data || []}
              accessToken={token || ""}
            />
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminServicesPage;
