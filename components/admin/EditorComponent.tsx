import React, { useRef, useImperativeHandle } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";

interface IProps {
  onChange: (data: string) => void;
  name: string;
  value?: string | null | undefined;
}

const EditorComponent: React.ForwardRefRenderFunction<
  TinyMCEEditor | null,
  IProps
> = ({ value, onChange, name }, ref) => {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  useImperativeHandle(ref, () => editorRef.current as TinyMCEEditor, [
    editorRef,
  ]);

  const log = () => {
    if (editorRef.current) {
      onChange(editorRef.current.getContent());
    }
  };

  return (
    <Editor
      apiKey="70i0y3oqfbzvyf9e1fxvk823iga274uue3l6t7zicad90bbk"
      id={name}
      textareaName={name}
      value={value || ""}
      onInit={(evt, editor) => {
        editorRef.current = editor;
      }}
      // initialValue={value || ''}
      onEditorChange={log}
      init={{
        plugins:
          "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion",
        editimage_cors_hosts: ["picsum.photos"],
        menubar: "file edit view insert format tools table help",
        toolbar:
          "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
        toolbar_sticky: true,
        // toolbar_sticky_offset: isSmallScreen ? 102 : 108,
        autosave_ask_before_unload: true,
        autosave_interval: "30s",
        autosave_prefix: "{path}{query}-{id}-",
        autosave_restore_when_empty: false,
        autosave_retention: "2m",
        image_advtab: true,
        // link_list: [
        //     { title: 'My page 1', value: 'https://www.tiny.cloud' },
        //     { title: 'My page 2', value: 'http://www.moxiecode.com' }
        // ],
        // image_list: [
        //     { title: 'My page 1', value: 'https://www.tiny.cloud' },
        //     { title: 'My page 2', value: 'http://www.moxiecode.com' }
        // ],
        image_class_list: [
          { title: "None", value: "" },
          { title: "rounded", value: "rounded-3" },
          { title: "rounded full", value: "rounded-circle" },
        ],
        importcss_append: true,
        file_picker_callback: (callback, value, meta) => {
          // Handle only image uploads
          if (meta.filetype === "image") {
            const inputEl = document.createElement("input");
            inputEl.setAttribute("type", "file");
            inputEl.setAttribute("accept", "image/*");

            // Listen for file selection
            inputEl.onchange = async () => {
              if (inputEl.files && inputEl.files.length > 0) {
                const file = inputEl.files[0];
                const formData = new FormData();
                formData.append("file", file);

                try {
                  // Make a request to your API endpoint for image upload
                  const response = await fetch(
                    `${process.env.NEXT_PUBLIC_URL}/api/upload`,
                    {
                      method: "POST",
                      body: formData,
                    },
                  );

                  if (response.ok) {
                    const data = await response.json();
                    callback(data.url, { alt: "My alt text" });
                  } else {
                    // Handle error response from the server
                    console.error("Image upload failed:", response.statusText);
                    callback("", { alt: "Failed to upload image" });
                  }
                } catch (error) {
                  // Handle network or other errors
                  console.error("Image upload failed:", error);
                  callback("", { alt: "Failed to upload image" });
                }
              }
            };

            // Trigger the file selection dialog
            inputEl.click();
          }

          // check uploaded file format the call the callback
          // if (meta.filetype === 'file')
          // if (meta.filetype === 'image')
          // if (meta.filetype === 'media') {
          //     callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
          // }
        },
        images_upload_url: `${process.env.NEXT_PUBLIC_URL}/api/upload`,
        templates: customTemplates,
        // template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
        // template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
        height: 500,
        image_caption: true,
        quickbars_selection_toolbar:
          "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
        noneditable_class: "mceNonEditable",
        toolbar_mode: "sliding",
        contextmenu: "link image table",
        skin: "oxide",
        content_css: "/css/landing.css",
        // content_css: 'default',
        content_style:
          "body { font-family:Tahoma,Arial,sans-serif; font-size:16px; direction:rtl; }",
      }}
    />
  );
};

const customTemplates = [
  {
    title: "عکس سمت چپ / محتوا سمت راست",
    description: "",
    content:
      '<section class="lwrapper"><div class="lrow litems-center"><div class="lcol-lg-6 lmb-5 lmb-lg-0 ltext-justify"><h2 class="lfont-size-4x lfw-700 ltext-black lmb-4 lmb-lg-5">چرا خریدن این محصول بسیار به درد شما میخورد؟</h2><div class="ltext-muted lspace-y-2 lmb-3 lmb-sm-4 lmb-lg-5"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p><p>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p><p>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p></div><a href="#" class="lbtn lmedium lbtn-success lrounded-2">دکمه کال تو اکشن</a></div><div class="lcol-lg-6"><img class="lrounded-3 lw-full" src="https://picsum.photos/600/420" alt="image alt" title="image title" /></div></div></section>',
  },
  {
    title: "عکس سمت راست / محتوا سمت چپ",
    description: "",
    content:
      '<section class="lwrapper"><div class="lrow litems-center"><div class="lcol-lg-6"><img class="lrounded-3 lw-full" src="https://picsum.photos/600/420" alt="image alt" title="image title" /></div><div class="lcol-lg-6 lmb-5 lmb-md-0 ltext-justify"><h2 class="lfont-size-4x lfw-700 ltext-black lmb-4 lmb-lg-5">چرا خریدن این محصول بسیار به درد شما میخورد؟</h2><div class="ltext-muted lspace-y-2 lmb-3 lmb-sm-4 lmb-lg-5"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p><p>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p><p>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p></div><a href="#" class="lbtn lmedium lbtn-info lrounded-2">دکمه کال تو اکشن</a></div></div></section>',
  },
  {
    title: "۳ تا کارد",
    description: "",
    content:
      '<section class="lwrapper"><h3 class="lmb-5 lpb-md-4 lfont-size-4x lfw-700 ltext-center">ویژگی های خرید محصول از ما</h3><div class="lrow ljustify-center"><div class="lcol-sm-6 lcol-lg-4 ltext-center lmb-5"><img class="ld-inline-block lrounded-full lmb-3 lmb-md-4" src="https://picsum.photos/120/120" alt="image alt" title="image title" /><h3 class="lmb-2 lmb-md-3 lfont-size-2x lfw-700">قابل حمل و سبک</h3><p class="ltext-muted lfw-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p><a href="#" class="lbtn lsmall lbtn-info lrounded-2 lmt-4">کال تو اکشن</a></div><div class="lcol-sm-6 lcol-lg-4 ltext-center lmb-5"><img class="ld-inline-block lrounded-full lmb-3 lmb-md-4" src="https://picsum.photos/121/120" alt="image alt" title="image title" /><h3 class="lmb-2 lmb-md-3 lfont-size-2x lfw-700">قیمت کاملا مناسب</h3><p class="ltext-muted lfw-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p><a href="#" class="lbtn lsmall lbtn-info lrounded-2 lmt-4">کال تو اکشن</a></div><div class="lcol-sm-6 lcol-lg-4 ltext-center lmb-5"><img class="ld-inline-block lrounded-full lmb-3 lmb-md-4" src="https://picsum.photos/120/121" alt="image alt" title="image title" /><h3 class="lmb-2 lmb-md-3 lfont-size-2x lfw-700">گارانتی و خدمات پس از فروش</h3><p class="ltext-muted lfw-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p><a href="#" class="lbtn lsmall lbtn-info lrounded-2 lmt-4">کال تو اکشن</a></div></div></section>',
  },
  {
    title: "۴ تا کارد",
    description: "",
    content:
      '<section class="lwrapper"><h3 class="lmb-5 lpb-md-4 lfont-size-4x lfw-700 ltext-center">ویژگی های خرید محصول از ما</h3><div class="lrow ljustify-center"><div class="lcol-6 lcol-md-3 ltext-center"><img class="ld-inline-block lrounded-full lmb-3 lmb-md-4" src="https://picsum.photos/120/120" alt="image alt" title="image title" /><h3 class="lmb-2 lmb-md-3 lfont-size-2x lfw-700">قابل حمل و سبک</h3><p class="ltext-muted lfw-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p></div><div class="lcol-6 lcol-md-3 ltext-center"><img class="ld-inline-block lrounded-full lmb-3 lmb-md-4" src="https://picsum.photos/121/120" alt="image alt" title="image title" /><h3 class="lmb-2 lmb-md-3 lfont-size-2x lfw-700">قیمت کاملا مناسب</h3><p class="ltext-muted lfw-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p></div><div class="lcol-6 lcol-md-3 ltext-center"><img class="ld-inline-block lrounded-full lmb-3 lmb-md-4" src="https://picsum.photos/120/121" alt="image alt" title="image title" /><h3 class="lmb-2 lmb-md-3 lfont-size-2x lfw-700">گارانتی و خدمات پس از فروش</h3><p class="ltext-muted lfw-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p></div><div class="lcol-6 lcol-md-3 ltext-center"><img class="ld-inline-block lrounded-full lmb-3 lmb-md-4" src="https://picsum.photos/121/121" alt="image alt" title="image title" /><h3 class="lmb-2 lmb-md-3 lfont-size-2x lfw-700">تخفیف ویژه مشتریان جدید</h3><p class="ltext-muted lfw-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p></div></div></section>',
  },
  {
    title: "محتوا +‌ بنر بالاش",
    description: "",
    content:
      '<section class="lwrapper"><img class="ld-block lw-full" src="https://picsum.photos/1700/420" alt="image alt" title="image title" /><div class="top-banner-margin"><div class="lrow ljustify-center"><div class="lcol-sm-11 lcol-md-10 lcol-lg-9 lcol-xl-8"><div class="ltext-center ltext-muted lspace-y-2 lbg-white lrounded-3 lpt-4 lpb-4 lps-4 lpe-4 lpt-lg-5 lpb-lg-5 lps-lg-5 lpe-lg-5 lshadow-md"><h2 class="ltext-black lfont-size-3x lfw-700 lmb-3 lmb-md-4">دستگاه پرکن مایعات به صورت اتوماتیک</h2><p>دستگاه پرکن اتوماتیک یکی از زیر گروه های ماشین آلات صنعتی است که وظیفه پر کردن انواع قوطی ها و ظروف یا انواع مواد در اندازه های مختلف را بر عهده دارد.</p><p>در گذشته نه چندان دور، از روش های دستی و یک خط تولید طولانی و پر از اپراتور (نیروی کار) برای پر کردن قوطی استفاده می شد، اما امروزه، با وجود پیشرفت در صنعت و فن آوری، دیگر از صف های طولانی خبری نیست و در کل دستگاه پرکن اتوماتیک که مواد مختلفی مانند غذا، نوشیدنی های غیر الکلی و غلیظ و بطری ها و شیشه های عسل و نوشیدنی ها را با نازل های خود در ظروف مختلف مانند شیشه پر میکند.</p><p>&nbsp;</p><h2 class="ltext-black lfont-size-3x lfw-700 lmb-3 lmb-md-4">دستگاه پرکن مایعات اتوماتیک چگونه کار می کند</h2><p>ابتدا مواد افزودنی (موادی که باعث ماندگاری مواد می شوند) اضافه می شوند و سپس کارشناس مواد غذایی شرکت آن را تأیید می کند و در مخازن نصب شده روی دستگاه می ریزد. بعد از این مرحله کانتینرها روی دستگاه قرار می گیرند و سپس دستگاه توسط یک اپراتور برنامه ریزی می شود و نازل ها برای مدت زمان مشخصی باز و بسته می شوند و در نهایت وارد مرحله بسته بندی می شوند و شما یک خروجی فوق العاده خواهید داشت.</p><p>&nbsp;</p><div class="ld-flex ljustify-center lgap-4"><a href="#" class="lbtn lmedium lrounded-3 lbtn-danger">خرید دستگاه پرکن مایعات</a><a href="#" class="lbtn lmedium lrounded-3 lbtn-dark">دریافت کاتالوگ</a></div></div></div></div></div></section>',
  },
  {
    title: "معرفی محصول / عکس سمت راست",
    description: "",
    content:
      '<section class="lwrapper lbg-blue lrounded-3"><div class="lcontainer"><div class="lrow litems-center ljustify-between"><div class="lcol-12 lcol-sm-5 lcol-lg-5 lmb-5 lmb-md-0"><img class="ld-block lw-full lrounded-3" src="https://picsum.photos/600/420" alt="image alt" title="image title" /></div><div class="lcol-12 lcol-sm-7 lcol-lg-6 ltext-white"><h2 class="lfont-size-4x lfw-700 lmb-4 lmb-sm-5">معرفی دستگاه پرکن ادکلن اتوماتیک</h2><ul class="lspace-y-3"><li class="ld-flex litems-center lgap-2"><span>✅</span><span>خدمات پس از فروش تا ۵ سال</span></li><li class="ld-flex litems-center lgap-2"><span>✅</span><span>پرکن کردن در انواع ظروف شیشه ای و پلاستکی</span></li><li class="ld-flex litems-center lgap-2"><span>✅</span><span>دارای سه مدل دستی، نیمه اتوماتیک و تمام اتوماتیگ</span></li><li class="ld-flex litems-center lgap-2"><span>✅</span><span>مدلهای اتوماتیک به اپراتور (نیروی کار) نیاز ندارند</span></li></ul><div class="ld-flex litems-center lgap-4 lmt-5"><a href="#" class="lbtn lmedium lbtn-dark lrounded-2">خرید پرکن ادکلن</a><a href="#" class="lbtn lmedium lbtn-white lrounded-2">دکمه کال تو اکشن</a></div></div></div></div></section>',
  },
  {
    title: "معرفی محصول / عکس سمت چپ",
    description: "",
    content:
      '<section class="lwrapper lbg-orange lrounded-3"><div class="lcontainer"><div class="lrow litems-center ljustify-between"><div class="lcol-12 lcol-sm-7 lcol-lg-6 ltext-white lmb-5 lmb-md-0"><h2 class="lfont-size-4x lfw-700 lmb-4 lmb-sm-5">معرفی دستگاه پرکن ادکلن اتوماتیک</h2><ul class="lspace-y-3"><li class="ld-flex litems-center lgap-2"><span>✅</span><span>خدمات پس از فروش تا ۵ سال</span></li><li class="ld-flex litems-center lgap-2"><span>✅</span><span>پرکن کردن در انواع ظروف شیشه ای و پلاستکی</span></li><li class="ld-flex litems-center lgap-2"><span>✅</span><span>دارای سه مدل دستی، نیمه اتوماتیک و تمام اتوماتیگ</span></li><li class="ld-flex litems-center lgap-2"><span>✅</span><span>مدلهای اتوماتیک به اپراتور (نیروی کار) نیاز ندارند</span></li></ul><div class="ld-flex litems-center lgap-4 lmt-5"><a href="#" class="lbtn lmedium lbtn-dark lrounded-2">خرید پرکن ادکلن</a><a href="#" class="lbtn lmedium lbtn-white lrounded-2">دکمه کال تو اکشن</a></div></div><div class="lcol-12 lcol-sm-5 lcol-lg-5"><img class="ld-block lw-full lrounded-3" src="https://picsum.photos/600/421" alt="image alt" title="image title" /></div></div></div></section>',
  },
  {
    title: "۴ کارد + محتوای سمت راست",
    description: "",
    content:
      '<section class="lwrapper"><div class="lrow"><div class="lcol-lg-6 lmb-5 lmb-lg-0"><h2 class="lmb-4 lmb-sm-5 lfont-size-4x lfw-700 ltext-black">چرا دستگاه اسپری پرکن خوب است؟</h2><div class="ltext-muted lspace-y-2 ltext-justify"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p><p>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p></div><p>&nbsp;</p><a href="#" class="lbtn lsmall lbtn-info lrounded-2">دکمه کال تو اکشن</a></div><div class="lcol-lg-6"><div class="lrow"><div class="lcol-sm-6 ltext-center lmb-5"><img class="ld-inline-block lrounded-full lmb-3 lmb-md-4" src="https://picsum.photos/100/100" alt="image alt" title="image title" /><h3 class="lmb-1 lfont-size-2x lfw-700">قابل حمل و سبک</h3><p class="ltext-muted lfw-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p></div><div class="lcol-sm-6 ltext-center lmb-5"><img class="ld-inline-block lrounded-full lmb-3 lmb-md-4" src="https://picsum.photos/101/100" alt="image alt" title="image title" /><h3 class="lmb-1 lfont-size-2x lfw-700">قیمت کاملا مناسب</h3><p class="ltext-muted lfw-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p></div><div class="lcol-sm-6 ltext-center lmb-5"><img class="ld-inline-block lrounded-full lmb-3 lmb-md-4" src="https://picsum.photos/100/101" alt="image alt" title="image title" /><h3 class="lmb-1 lfont-size-2x lfw-700">گارانتی و خدمات پس از فروش</h3><p class="ltext-muted lfw-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p></div><div class="lcol-sm-6 ltext-center lmb-5"><img class="ld-inline-block lrounded-full lmb-3 lmb-md-4" src="https://picsum.photos/101/101" alt="image alt" title="image title" /><h3 class="lmb-1 lfont-size-2x lfw-700">قیمت مناسب برای مشتریان جدید</h3><p class="ltext-muted lfw-300">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p></div></div></div></div></section>',
  },
];

export default React.forwardRef(EditorComponent);
