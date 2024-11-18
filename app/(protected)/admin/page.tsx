import AdminLayout from "@/layouts/AdminLayout";
import AdminPageTitle from "./_components/AdminPageTitle";
import { Card, CardContent } from "@/components/ui/card";
import bcrypt from "bcrypt";

const AdminPage = () => {
  const masih = bcrypt.hashSync("Masih123!@#", 12);
  const mahbobe = bcrypt.hashSync("Mahbobe123!@#", 12);

  console.log("masih => ", masih);
  console.log("mahbobe => ", mahbobe);

  return (
    <AdminLayout>
      <AdminPageTitle
        title="داشبورد"
        description="سلام ادمین! به داشبورد امداد فوری خوش آمدید"
      />

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

export default AdminPage;
