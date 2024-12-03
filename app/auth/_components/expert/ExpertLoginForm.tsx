"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuthVariables } from "../../_core/hooks";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { ILoginInputs, ILoginResponse } from "@/interfaces/User";
import { ExpertLoginAPI } from "@/services/Auth";
// import { emailRegex } from "@/constants/regex";

const ExpertLoginForm = () => {
  const { setExpertLoginForm, setExpertSignupForm } = useAuthVariables();

  const onShowSignupForm = () => {
    setExpertLoginForm(false);
    setExpertSignupForm(true);
  };

  const router = useRouter();
  const { toast } = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginInputs>();

  const onSubmit: SubmitHandler<ILoginInputs> = async (data) => {
    try {
      const response: ILoginResponse | undefined = await ExpertLoginAPI({
        mobile: data.mobile,
        password: data.password,
      });

      if (!response) {
        toast({
          variant: "destructive",
          title: "Something went wrong!",
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

      toast({
        variant: "success",
        title: response.message,
      });
      router.push("/expert");
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-2">سلام متخصص!</CardTitle>
        <CardDescription>
          متخصص گرامی خوش آمدید! برای دسترسی به امکانات لطفا وارد سامانه شوید.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="mobile">شماره موبایل</Label>

            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "شماره موبایل را وارد کنید!",
                },
                // pattern: {
                //   value: emailRegex,
                //   message: "Enter a valid Email please!",
                // },
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
                  {errors?.mobile?.message}
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
                  message: "کلمه عبور را وارد کنید!",
                },
              }}
              render={({ field: { value, onChange, ref } }) => (
                <Input
                  id="password"
                  type="password"
                  ref={ref}
                  onChange={onChange}
                  value={value}
                />
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

          <p className="text-sm text-muted-foreground">
            حساب کاربری ندارید؟{" "}
            <Button
              variant="link"
              className="p-0 text-[var(--primary-color)] h-auto"
              onClick={onShowSignupForm}
              type="button"
            >
              ثبت نام کنید
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
              "ورود به سامانه"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default React.memo(ExpertLoginForm);
