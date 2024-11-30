import AdminLayout from "@/layouts/AdminLayout";
import AdminPageTitle from "./_components/AdminPageTitle";
import AdminHomeStatus from "./_components/AdminHomeStatus";

const AdminPage = () => {
  return (
    <AdminLayout>
      <AdminPageTitle
        title="داشبورد"
        description="سلام ادمین! به داشبورد امداد فوری خوش آمدید"
      />

      <div className="-mt-6">
        <AdminHomeStatus />
      </div>
    </AdminLayout>
  );
};

export default AdminPage;
