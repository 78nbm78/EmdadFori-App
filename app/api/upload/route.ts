// export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
// import { AdminAuthChecker } from "@/utils/AdminAuthChecker";

// Initialize S3 Client
const s3Client = new S3Client({
  region: "default",
  endpoint: process?.env?.LIARA_ENDPOINT as string,
  credentials: {
    accessKeyId: process?.env?.LIARA_ACCESS_KEY as string,
    secretAccessKey: process?.env?.LIARA_SECRET_KEY as string,
  },
});

// Allowed image formats and size limit
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

// Helper function to upload image to S3
async function uploadImageToS3(
  file: Buffer,
  fileName: string,
  mimeType: string,
): Promise<string> {
  const params = {
    Bucket: process.env.LIARA_BUCKET_NAME as string,
    Key: `uploads/${fileName}`,
    Body: file,
    ContentType: mimeType,
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  // Return the public URL of the uploaded file
  return `https://emdadfori.storage.c2.liara.space/${params.Key}`;
}

// API Route Handler
export async function POST(request: NextRequest) {
  try {
    // const checkAuth = await AdminAuthChecker(request);
    // if (!checkAuth)
    //   return NextResponse.json(
    //     { type: "ERROR", message: "Unauthorized!" },
    //     { status: 401 },
    //   );

    // Parse the incoming request form data
    const formData = await request.formData();
    const file = formData.get("file") as Blob | null;

    if (!file) {
      return NextResponse.json(
        { error: "File blob is required." },
        { status: 400 },
      );
    }

    const mimeType = file.type;
    const fileSize = file.size;

    // Validate file type
    if (!ALLOWED_MIME_TYPES.includes(mimeType)) {
      return NextResponse.json(
        { error: "فرمت فایل عکس نمی‌باشد! لطفا عکس آپلود کنید." },
        { status: 400 },
      );
    }

    // Validate file size
    if (fileSize > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `سایز عکس باید زیر ۲ مگابایت باشد.` },
        { status: 400 },
      );
    }

    // Convert file to buffer for processing
    const buffer = Buffer.from(await file.arrayBuffer());

    // Resize and process the image
    const processedBuffer = await sharp(buffer).toBuffer();

    // Generate a unique filename
    const fileName = `${uuid()}.${mimeType.split("/")[1]}`;

    // Upload processed image to S3
    const fileUrl = await uploadImageToS3(processedBuffer, fileName, mimeType);

    // Respond with the uploaded file URL
    return NextResponse.json({
      success: true,
      message: "فایل با موفقیت آپلود شد.",
      url: fileUrl,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { error: "خطایی پیش آمد! لطفا دوباره تلاش کنید." },
      { status: 400 },
    );
  }
}
