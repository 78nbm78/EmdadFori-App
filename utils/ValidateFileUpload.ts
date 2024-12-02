export const validateThumbnailFile = (
  file: File,
): { valid: boolean; message?: string } => {
  const maxSizeInBytes = 1048576; // 1 MB
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, message: "فرمت فایل باید عکس باشد" };
  }

  if (file.size > maxSizeInBytes) {
    return { valid: false, message: "حجم فایل باید کمتر از ۱ مگابایت باشد" };
  }

  return { valid: true };
};
