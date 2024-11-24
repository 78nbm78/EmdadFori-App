import MainLayout from "@/layouts/MainLayout";
import AdminAuthForm from "./_components/AdminAuthForm";

const AdminLoginPage = () => {
  return (
    <MainLayout>
      <section className="wrapper bg-[#ece0db]">
        <div className="container">
          <div className="max-w-96 mx-auto">
            <AdminAuthForm />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AdminLoginPage;
