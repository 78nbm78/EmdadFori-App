"use client";

import { Loader2, Trash2Icon } from "lucide-react";
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
import RevalidateByTag from "@/actions/revalidate";
import { DeleteBrandBySlug } from "@/services/Brands";

interface IProps {
  pageSlug: string;
  pageTitle: string;
  accessToken: string;
}

function DeleteBrandBtn({ pageSlug, pageTitle, accessToken }: IProps) {
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  async function handleDelete() {
    try {
      const response = await DeleteBrandBySlug({
        accessToken,
        pageSlug: decodeURI(pageSlug),
      });

      if (!response || response.type === "ERROR") {
        toast({
          variant: "destructive",
          title: "خطایی پیش آمد! لطفا بعدا تلاش کنید.",
        });
        return;
      }

      await RevalidateByTag("brandsData");

      toast({
        variant: "success",
        title: "صفحه با موفقیت پاک شد.",
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash2Icon size={16} className="text-red-500" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>آیا مطمئن هستید؟</AlertDialogTitle>
          <AlertDialogDescription>
            شما در حال حذف صفحه <span className="font-bold">{pageTitle}</span>{" "}
            هستید.
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
              startTransition(handleDelete);
            }}
          >
            حذف صفحه {loading && <Loader2 className="animate-spin" />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteBrandBtn;
