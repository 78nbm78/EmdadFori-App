"use client";

import Image from "next/image";
import TruckImage from "@/public/images/truck.png";
import { CarFrontIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShowAbout = () => {
  return (
    <section className="wrapper bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Image
            src={TruckImage}
            alt="درباره امداد فوری"
            title="درباره امداد فوری"
          />

          <div className="text-slate-500 text-justify space-y-3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-5">
              درباره امداد فوری
            </h2>

            <hr className="custom-hr" />

            <p className="indent-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <p className="indent-6">
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد.
            </p>

            <div className="flex items-center gap-4 !mt-8">
              <Button
                variant="secondary"
                className="gap-3"
                onClick={() => console.log("do sth...")}
              >
                درخواست آنی امداد خودرو
                <CarFrontIcon className="scale-125" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowAbout;
