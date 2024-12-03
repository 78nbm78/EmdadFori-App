"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IBlogResponse, IBlog, IBlogType } from "@/interfaces/Blog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import EditorComponent from "@/components/admin/EditorComponent";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import ImageUpload from "@/components/admin/ImageUpload";
import { UpdateBlogAPI } from "@/services/Blog";
import RevalidateByTag from "@/actions/revalidate";

interface IProps {
  accessToken: string;
  blog: IBlogType | undefined;
  pageSlug: string;
}

const UpdateBlogForm = ({ accessToken, blog, pageSlug }: IProps) => {
  const router = useRouter();

  const form = useForm<IBlogType>({
    resolver: zodResolver(IBlog),
    defaultValues: {
      title: blog?.title || "",
      slug: blog?.slug || "",
      googleTitle: blog?.googleTitle || "",
      description: blog?.description || "",
      thumbnail: blog?.thumbnail || "",
      content: blog?.content || "",
    },
  });

  const onSubmit = async (data: IBlogType) => {
    try {
      data.slug = data.slug.split(" ").join("-").toLowerCase();

      const response: IBlogResponse | undefined = await UpdateBlogAPI({
        accessToken,
        pageSlug,
        data,
      });

      if (!response) {
        toast({
          variant: "destructive",
          title: "خطایی پیش آمد! لطفا دوباره تلاش کنید",
        });
        return;
      }

      if (response.type === "ERROR") {
        toast({
          variant: "destructive",
          title: response.message,
        });
        return;
      }

      console.log(response);

      await RevalidateByTag("blogsData");

      toast({
        variant: "success",
        title: response.message,
      });
      router.push("/admin/blog");
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-wrap -mx-3"
      >
        <div className="w-full sm:w-1/2 px-3 mb-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  عنوان صفحه
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={
                      form?.formState?.errors?.title && "border border-red-500"
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full sm:w-1/2 px-3 mb-6">
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="slug">
                  آدرس صفحه
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div className="flex">
                    <div className="grow">
                      <Input
                        {...field}
                        className={`rounded-e-none ${
                          form?.formState?.errors?.slug &&
                          "border border-red-500"
                        }`}
                      />
                    </div>
                    <div
                      className="rounded-s-lg bg-slate-200 flex items-center px-2"
                      dir="ltr"
                    >
                      emdadfori.com/blog/
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full sm:w-1/2 px-3 mb-6">
          <FormField
            control={form.control}
            name="googleTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>عنوان کامل گوگل</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={
                      form?.formState?.errors?.googleTitle &&
                      "border border-red-500"
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full px-3 mb-6">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  توضیحات مختصر
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={3}
                    className={
                      form?.formState?.errors?.description &&
                      "border border-red-500"
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full sm:w-1/2 px-3 mb-6">
          <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="thumbnail">
                  عکس شاخص صفحه
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <ImageUpload {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full px-3 mb-6">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>محتوای صفحه</FormLabel>
                <FormControl>
                  <EditorComponent {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full px-3 text-end">
          <Button
            variant="success"
            size="lg"
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            {form.formState.isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              "ثبت و ذخیره"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateBlogForm;
