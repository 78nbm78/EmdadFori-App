import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";

const NotFound = () => {
  return (
    <MainLayout>
      <section className="wrapper">
        <div className="container m-auto text-center">
          <h2 className="text-black dark:text-white font-bold text-2xl md:text-3xl mb-4">
            این صفحه پیدا نشد!
          </h2>
          <p className="font-thin text-base text-stone-600 dark:text-white/70">
            صفحه ای که بدنبال آن میگردید یافت نشد. از طریق لینک های زیر به بخش
            های دیگر سایت دسترسی داشته باشید.
          </p>
          <div className="flex justify-center gap-4 mt-5 md:mt-6">
            <Button variant="default" asChild>
              <Link href="/">بازگشت به خانه</Link>
            </Button>
            <Button variant="destructive" asChild>
              <Link href="/services">خدمات امداد فوری</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default NotFound;
