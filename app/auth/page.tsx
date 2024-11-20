import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CarFront, UserIcon } from "lucide-react";
import HandleExpertForms from "./_components/expert/HandleExpertForms";
import HandleApplicantForms from "./_components/applicant/HandleApplicantForms";
import MainLayout from "@/layouts/MainLayout";

const AuthPage = () => {
  return (
    <MainLayout>
      <div className="wrapper bg-[#ece0db] px-4 flex flex-col items-center justify-center">
        <Tabs dir="rtl" defaultValue="applicant" className="max-w-96">
          <TabsList className="grid w-full grid-cols-2 h-auto">
            <TabsTrigger
              value="applicant"
              className="flex flex-col items-center justify-center gap-1 data-[state=active]:bg-[var(--secondary-color)] data-[state=active]:text-white"
            >
              <UserIcon />
              کاربر هستم
            </TabsTrigger>
            <TabsTrigger
              value="expert"
              className="flex flex-col items-center justify-center gap-1 data-[state=active]:bg-[var(--secondary-color)] data-[state=active]:text-white"
            >
              <CarFront />
              متخصص هستم
            </TabsTrigger>
          </TabsList>
          <TabsContent value="applicant">
            <HandleApplicantForms />
          </TabsContent>
          <TabsContent value="expert">
            <HandleExpertForms />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default AuthPage;
