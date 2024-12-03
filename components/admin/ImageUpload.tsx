"use client";

import React, { forwardRef } from "react";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import { Input } from "../ui/input";
import { validateThumbnailFile } from "@/utils/ValidateFileUpload";

const uploadToS3 = async (
  file: File,
  accessToken: string,
): Promise<{ type: "ERROR" | "SUCCESS"; message: string; url?: string }> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    // Send the file to the API route
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      return { type: "ERROR", message: data.message || "خطا در آپلود عکس!" };
    }

    return data; // { type: 'SUCCESS', message: 'File uploaded', url: 'https://...' }
  } catch (error) {
    console.error("Error uploading file:", error);
    return { type: "ERROR", message: "خطایی در آپلود فایل رخ داد." };
  }
};

interface IProps {
  onChange: (data: string) => void;
  name: string;
  value?: string | null | undefined;
  accessToken: string;
}

const ImageUpload = forwardRef<HTMLInputElement, IProps>(
  ({ name, onChange, value, accessToken }, ref) => {
    const uploadHandler = async (file: File) => {
      try {
        const result = await uploadToS3(file, accessToken);

        if (!result || result?.type === "ERROR") {
          toast({
            variant: "destructive",
            title: "در آپلود عکس خطایی رخ داد! دوباره تلاش کنید",
          });
          return;
        }

        toast({
          variant: "success",
          title: "عکس با موفقیت در سرور آپلود شد!",
        });

        onChange(result.url || "");
      } catch (error: unknown) {
        console.error(error);
      }
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.length) {
        const file = e.target.files[0];

        const validation = validateThumbnailFile(file);
        if (!validation.valid) {
          toast({
            variant: "destructive",
            title: validation.message,
          });
          return;
        }

        uploadHandler(file);
      }
    };

    return (
      <div className="space-y-2">
        <Input
          type="file"
          onChange={changeHandler}
          name={name}
          ref={ref}
          className="cursor-pointer"
        />
        {value ? (
          <Image
            src={value}
            className="rounded-lg w-[180px] h-[180px]"
            alt="preview"
            title="preview"
            width={180}
            height={180}
          />
        ) : null}
      </div>
    );
  },
);

ImageUpload.displayName = "ImageUpload";

export default ImageUpload;
