import * as z from "zod";

export const IService = z.object({
  id: z.number().optional(),
  title: z
    .string({ message: "عنوان صفحه را وارد کنید" })
    .min(5, { message: "عنوان باید حداقل ۵ کاراکتر باشد" })
    .max(100, { message: "عنوان نباید بیشتر از ۱۰۰ کاراکتر باشد" }),
  googleTitle: z
    .string()
    .min(5, { message: "عنوان گوگل باید حداقل ۵ کاراکتر باشد" })
    .max(100, { message: "عنوان گوگل نباید بیشتر از ۱۰۰ کاراکتر باشد" })
    .optional(),
  slug: z
    .string({ message: "آدرس صفحه را وارد کنید" })
    .min(5, { message: "آدرس صفحه باید حداقل ۵ کاراکتر باشد" })
    .max(100, { message: "آدرس صفحه نباید بیشتر از ۱۰۰ کاراکتر باشد" }),
  description: z
    .string({ message: "توضیحات مختصر را وارد کنید" })
    .min(120, { message: "توضیحات باید حداقل ۱۲۰ کاراکتر باشد" })
    .max(240, { message: "توضیحات نباید بیشتر از ۲۴۰ کاراکتر باشد" }),
  thumbnail: z.lazy(() =>
    z.union([
      z
        .string({ message: "لطفا یک عکس آپلود کنید" })
        .url({ message: "فرمت آدرس باید صحیح باشد" }),
      z
        .instanceof(File)
        .refine(
          (file) => file.size < 1048576 && file.type.startsWith("image/"),
          {
            message: "لطفا فرمت عکس آپلود کرده و حجم آن کمتر از ۱ مگابایت باشد",
          },
        ),
    ]),
  ),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  content: z.string().optional(),
  greenIcon: z.string().optional(),
  isPublished: z.boolean().optional(),
  _count: z.object({ comments: z.number() }).optional(),
});

export type IServiceType = z.infer<typeof IService>;

export interface IServicesResponse {
  type: "SUCCESS" | "ERROR";
  data: IServiceType[];
}

export interface IServiceResponse {
  type: "SUCCESS" | "ERROR";
  data: IServiceType;
}
