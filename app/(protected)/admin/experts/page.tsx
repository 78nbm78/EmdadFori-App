import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../_components/AdminPageTitle";
import ShowExpertsList from "./_components/ShowExpertsList";
import { getCookieByKey } from "@/actions/cookie";
import { getAllExperts } from "@/services/Experts";

const AdminExpertsPage = async () => {
  const token = await getCookieByKey("token");
  const experts = await getAllExperts({ accessToken: token || "" });

  return (
    <AdminLayout>
      <AdminPageTitle
        title="لیست متخصصین"
        description="مدیریت متخصصین امداد فوری"
      />

      <section>
        <Card>
          <CardContent className="pt-6">
            <ShowExpertsList experts={experts?.data || []} />
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminExpertsPage;
