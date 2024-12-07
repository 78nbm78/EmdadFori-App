import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../../_components/AdminPageTitle";
import { getCookieByKey } from "@/actions/cookie";
import { GetBrandBySlug } from "@/services/Brands";
import UpdateBrandForm from "../../_components/UpdateBrandForm";

interface IProps {
  params: { slug: string };
}

const AdminEditBrandPage = async ({ params }: IProps) => {
  const token = await getCookieByKey("token");
  const brand = await GetBrandBySlug({ slug: decodeURI(params.slug) });

  return (
    <AdminLayout>
      <AdminPageTitle
        title={`ویرایش ${brand?.data?.title}`}
        description={brand?.data?.description}
      />

      <section>
        <Card>
          <CardContent className="pt-6">
            <UpdateBrandForm
              accessToken={token || ""}
              brand={brand?.data}
              pageSlug={params.slug}
            />
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminEditBrandPage;
