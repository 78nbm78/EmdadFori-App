"use client";

import { Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useTransition } from "react";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { expertAccountActivation } from "@/services/Experts";

interface IProps {
  expertId: number;
  username: string;
  accessToken: string;
}

function ActiveExpertBtn({ expertId, username, accessToken }: IProps) {
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  async function activeExpert() {
    try {
      const response = await expertAccountActivation({
        accessToken,
        isActive: true,
        expertId,
      });

      if (!response || response.type === "ERROR") {
        toast({
          variant: "destructive",
          title: "خطایی پیش آمد! لطفا بعدا تلاش کنید.",
        });
      }

      toast({
        variant: "success",
        title: "حساب کاربری متخصص با موفقیت فعال شد.",
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full text-start">
        تایید حساب
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>آیا مطمئن هستید؟</AlertDialogTitle>
          <AlertDialogDescription>
            شما در حال فعال کردن حساب کاربری{" "}
            <span className="font-bold">{username}</span> هستید.
            <br />
            آیا مطمئنید؟
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>لغو</AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              startTransition(activeExpert);
            }}
          >
            فعال سازی متخصص {loading && <Loader2 className="animate-spin" />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ActiveExpertBtn;
