import AdminLayout from "@/layouts/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import AdminPageTitle from "../../../_components/AdminPageTitle";
import UpdateBlogForm from "../../_components/UpdateBlogForm";
import { getCookieByKey } from "@/actions/cookie";
import { GetBlogBySlug } from "@/services/Blog";

interface IProps {
  params: { slug: string };
}

const AdminEditBlogPage = async ({ params }: IProps) => {
  const token = await getCookieByKey("token");
  const blog = await GetBlogBySlug({ slug: params.slug });

  return (
    <AdminLayout>
      <AdminPageTitle
        title={`ویرایش ${blog?.data?.title}`}
        description={blog?.data?.description}
      />

      <section>
        <Card>
          <CardContent className="pt-6">
            <UpdateBlogForm
              accessToken={token || ""}
              blog={blog?.data}
              pageSlug={params.slug}
            />
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminEditBlogPage;
