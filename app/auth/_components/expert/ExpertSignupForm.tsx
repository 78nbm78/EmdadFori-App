"use client";

import { useToast } from "@/hooks/use-toast";
import {
  IExpertSignupInputs,
  ILoginInputs,
  ILoginResponse,
  ISignupResponse,
} from "../../_core/interfaces";
import { Controller, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ExpertLoginAPI, ExpertSignupAPI } from "../../_core/requests";
import { useAuthVariables } from "../../_core/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, EyeIcon, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { checkCodeMeli } from "@/utils/CheckMeliCode";
import { useState } from "react";

const ExpertSignupForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { setExpertSignupForm, setExpertLoginForm } = useAuthVariables();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const loginLogic = async ({ mobile, password }: ILoginInputs) => {
    try {
      const response: ILoginResponse | undefined = await ExpertLoginAPI({
        mobile,
        password,
      });

      if (!response) {
        toast({
          variant: "destructive",
          title: "خطایی پیش آمد!",
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

      // toast({
      //     variant: "success",
      //     title: response.message,
      // })
      router.push("/expert");
    } catch (err: unknown) {
      console.log(err);
    }
  };

  // toggle to login form
  const onShowLoginForm = () => {
    setExpertSignupForm(false);
    setExpertLoginForm(true);
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<IExpertSignupInputs>();

  const onSubmit: SubmitHandler<IExpertSignupInputs> = async (data) => {
    try {
      const response: ISignupResponse | undefined = await ExpertSignupAPI({
        firstName: data.firstName,
        lastName: data.lastName,
        mobile: data.mobile,
        nationalCode: data.nationalCode,
        phoneNumber: data.phoneNumber,
        password: data.password,
      });

      if (!response) {
        toast({
          variant: "destructive",
          title: "خطایی پیش آمد!",
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

      await loginLogic({
        mobile: data.mobile,
        password: data.password,
      });

      toast({
        variant: "success",
        title: `${response?.message}`,
      });
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-2">ثبت نام متخصص</CardTitle>
        <CardDescription>
          برای دسترسی به درخواست های لحظه ای کاربران به عنوان یک متخصص ثبت نام
          کنید!
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="firstName">نام</Label>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "نام اجباری است!",
                },
                minLength: {
                  value: 2,
                  message: "لطفا بیشتر از ۲ کاراکتر تایپ کنید!",
                },
                maxLength: {
                  value: 60,
                  message: "نام نامعتبر است!",
                },
              }}
              render={({ field: { value, onChange, ref } }) => (
                <Input
                  id="firstName"
                  type="text"
                  ref={ref}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="firstName"
            />
            {errors?.firstName && (
              <Alert className="!mt-3" variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="mb-0 text-sm">
                  {errors.firstName.message}
                </AlertTitle>
              </Alert>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName">نام خانوادگی</Label>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "نام خانوادگی اجباری است!",
                },
                minLength: {
                  value: 2,
                  message: "لطفا بیشتر از ۲ کاراکتر تایپ کنید!",
                },
                maxLength: {
                  value: 60,
                  message: "نام خانوادگی نامعتبر است!",
                },
              }}
              render={({ field: { value, onChange, ref } }) => (
                <Input
                  id="lastName"
                  type="text"
                  ref={ref}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="lastName"
            />
            {errors?.lastName && (
              <Alert className="!mt-3" variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="mb-0 text-sm">
                  {errors.lastName.message}
                </AlertTitle>
              </Alert>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="mobile">شماره موبایل</Label>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "شماره موبایل اجباری است!",
                },
                pattern: {
                  value: /^09\d{9}$/,
                  message: "شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد!",
                },
              }}
              render={({ field: { value, onChange, ref } }) => (
                <Input
                  id="mobile"
                  type="number"
                  ref={ref}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="mobile"
            />
            {errors?.mobile && (
              <Alert className="!mt-3" variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="mb-0 text-sm">
                  {errors.mobile.message}
                </AlertTitle>
              </Alert>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="nationalCode">کد ملی</Label>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "کد ملی اجباری است!",
                },
                validate: {
                  lengthCheck: (value) =>
                    value.length === 10 || "کد ملی باید ۱۰ رقم باشد!",
                  checkCodeMeli: (value) =>
                    checkCodeMeli(value) || "کد ملی نامعتبر است!",
                },
              }}
              render={({ field: { value, onChange, ref } }) => (
                <Input
                  id="nationalCode"
                  type="string"
                  ref={ref}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="nationalCode"
            />
            {errors?.nationalCode && (
              <Alert className="!mt-3" variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="mb-0 text-sm">
                  {errors.nationalCode.message}
                </AlertTitle>
              </Alert>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="phoneNumber">شماره ثابت</Label>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "شماره ثابت منزل اجباری است!",
                },
                pattern: {
                  value: /^0\d{10}$/,
                  message: "شماره ثابت باید با ۰ شروع شود و ۱۱ رقم باشد!",
                },
              }}
              render={({ field: { value, onChange, ref } }) => (
                <Input
                  id="phoneNumber"
                  type="number"
                  ref={ref}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="phoneNumber"
            />
            {errors?.phoneNumber && (
              <Alert className="!mt-3" variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="mb-0 text-sm">
                  {errors.phoneNumber.message}
                </AlertTitle>
              </Alert>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">کلمه عبور</Label>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "کلمه عبور اجباری است!",
                },
              }}
              render={({ field: { value, onChange, ref } }) => (
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    ref={ref}
                    onChange={onChange}
                    value={value}
                  />
                  <Button
                    variant="ghost"
                    className="p-0 w-8 h-8 absolute bottom-1 end-1"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff /> : <EyeIcon />}
                  </Button>
                </div>
              )}
              name="password"
            />
            {errors?.password && (
              <Alert className="!mt-3" variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="mb-0 text-sm">
                  {errors?.password?.message}
                </AlertTitle>
              </Alert>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="passwordRepeat">تکرار کلمه عبور</Label>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "تکرار کلمه عبور اجباری است!",
                },
                validate: (value) =>
                  value === watch("password") ||
                  "کلمه عبور با تکرار آن همخوانی ندارد!",
              }}
              render={({ field: { value, onChange, ref } }) => (
                <div className="relative">
                  <Input
                    id="passwordRepeat"
                    type={showPassword ? "text" : "password"}
                    ref={ref}
                    onChange={onChange}
                    value={value}
                  />
                  <Button
                    variant="ghost"
                    className="p-0 w-8 h-8 absolute bottom-1 end-1"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff /> : <EyeIcon />}
                  </Button>
                </div>
              )}
              name="passwordRepeat"
            />
            {errors?.passwordRepeat && (
              <Alert className="!mt-3" variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="mb-0 text-sm">
                  {errors.passwordRepeat.message}
                </AlertTitle>
              </Alert>
            )}
          </div>

          <p className="text-sm text-muted-foreground">
            حساب کاربری در امداد فوری دارید؟{" "}
            <Button
              variant="link"
              className="p-0 text-[var(--secondary-color)]"
              onClick={onShowLoginForm}
              type="button"
            >
              وارد شوید
            </Button>
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="primary" className="w-full" type="submit">
            {isSubmitting ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "ثبت نام کنید"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ExpertSignupForm;
