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

function DeActiveExpertBtn({ expertId, username, accessToken }: IProps) {
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  async function deActiveExpert() {
    try {
      const response = await expertAccountActivation({
        accessToken,
        isActive: false,
        expertId,
      });

      if (!response || response.type === "ERROR") {
        toast({
          variant: "destructive",
          title: "خطایی پیش آمد! لطفا بعدا تلاش کنید.",
        });
        return;
      }

      toast({
        variant: "success",
        title: "حساب کاربری متخصص غیر فعال شد.",
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeActivation = () => {
    deActiveExpert();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>غیر فعال کردن حساب</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>آیا مطمئن هستید؟</AlertDialogTitle>
          <AlertDialogDescription>
            شما در حال غیر فعال سازی حساب کاربری{" "}
            <span className="font-bold">{username}</span> هستید.
            <br />
            از این به بعد {username} نمی‌تواند به حساب خود دسترسی داشته باشد،
            آیا مطمئنید؟
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>لغو</AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              startTransition(handleDeActivation);
            }}
          >
            غیر فعال سازی حساب {loading && <Loader2 className="animate-spin" />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeActiveExpertBtn;
