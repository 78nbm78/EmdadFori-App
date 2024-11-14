const HomeServices = () => {
  return (
    <section className="wrapper bg-[#f5f5f5]">
      <div className="container">
        <div className="flex flex-col items-center mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black text-center">
            خدمات امداد فوری
          </h2>
          <hr className="custom-hr" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
          <div className="flex flex-col justify-center items-center text-center p-4 border border-transparent rounded-xl transition hover:border-primary">
            <span className="mb-6">ICON</span>
            <h3 className="text-base sm:text-lg lg:text-xl text-slate-800 font-medium mb-2">
              صافکاری
            </h3>
            <p className="text-slate-500 font-light">
              توضیحات مختصر درباره خدمت صافکاری که می‌توانیم ارائه دهیم
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-4 border border-transparent rounded-xl transition hover:border-primary">
            <span className="mb-6">ICON</span>
            <h3 className="text-base sm:text-lg lg:text-xl text-slate-800 font-medium mb-2">
              نقاشی
            </h3>
            <p className="text-slate-500 font-light">
              توضیحات مختصر درباره خدمت صافکاری که می‌توانیم ارائه دهیم
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-4 border border-transparent rounded-xl transition hover:border-primary">
            <span className="mb-6">ICON</span>
            <h3 className="text-base sm:text-lg lg:text-xl text-slate-800 font-medium mb-2">
              مکانیکی
            </h3>
            <p className="text-slate-500 font-light">
              توضیحات مختصر درباره خدمت صافکاری که می‌توانیم ارائه دهیم
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-4 border border-transparent rounded-xl transition hover:border-primary">
            <span className="mb-6">ICON</span>
            <h3 className="text-base sm:text-lg lg:text-xl text-slate-800 font-medium mb-2">
              امداد خودرو
            </h3>
            <p className="text-slate-500 font-light">
              توضیحات مختصر درباره خدمت صافکاری که می‌توانیم ارائه دهیم
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-4 border border-transparent rounded-xl transition hover:border-primary">
            <span className="mb-6">ICON</span>
            <h3 className="text-base sm:text-lg lg:text-xl text-slate-800 font-medium mb-2">
              سوخت رسانی
            </h3>
            <p className="text-slate-500 font-light">
              توضیحات مختصر درباره خدمت صافکاری که می‌توانیم ارائه دهیم
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-4 border border-transparent rounded-xl transition hover:border-primary">
            <span className="mb-6">ICON</span>
            <h3 className="text-base sm:text-lg lg:text-xl text-slate-800 font-medium mb-2">
              باطری به باطری
            </h3>
            <p className="text-slate-500 font-light">
              توضیحات مختصر درباره خدمت صافکاری که می‌توانیم ارائه دهیم
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
