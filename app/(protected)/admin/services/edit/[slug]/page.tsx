import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../../_components/AdminPageTitle";
import UpdateServiceForm from "../../_components/UpdateServiceForm";
import { getCookieByKey } from "@/actions/cookie";
import { GetServiceBySlug } from "@/services/Services";

interface IProps {
  params: { slug: string };
}

const AdminEditServicePage = async ({ params }: IProps) => {
  const token = await getCookieByKey("token");
  const service = await GetServiceBySlug({ slug: decodeURI(params.slug) });

  return (
    <AdminLayout>
      <AdminPageTitle
        title={`ویرایش ${service?.data?.title}`}
        description={service?.data?.description}
      />

      <section>
        <Card>
          <CardContent className="pt-6">
            <UpdateServiceForm
              accessToken={token || ""}
              service={service?.data}
              pageSlug={params.slug}
            />
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminEditServicePage;
