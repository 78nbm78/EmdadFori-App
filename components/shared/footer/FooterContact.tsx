"use client";

import { Mail, MapPin, PhoneCall, TabletSmartphone } from "lucide-react";

const FooterContact = () => {
  return (
    <>
      <ul className="space-y-4 mb-6">
        <li>
          <a
            href="tel:+98"
            rel="noopener noreferrer nofollow"
            className="flex items-center text-white"
          >
            <PhoneCall className="min-w-6 text-center me-2 sm:me-3" />
            <span className="[direction:ltr] track_calls">۰۲۱ ۱۲۳ ۴۵ ۶۷</span>
          </a>
        </li>
        <li>
          <a
            href="tel:+98"
            rel="noopener noreferrer nofollow"
            className="flex items-center text-white"
          >
            <TabletSmartphone className="min-w-6 text-center me-2 sm:me-3" />
            <span className="[direction:ltr] track_calls">۰۹۱۲ ۱۲۳ ۴۵ ۶۷</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:info@emdadfori.com"
            rel="noopener noreferrer nofollow"
            className="flex items-center text-white"
          >
            <Mail className="min-w-6 text-center me-2 sm:me-3" />
            <span className="[direction:ltr]">info@emdadfori.com</span>
          </a>
        </li>
        <li>
          <p className="flex text-white">
            <MapPin className="min-w-6 text-center me-2 sm:me-3" />
            <span>
              تهران - منیریه - ادامه‌ی آدرس شما - در این قسمت - قرار خواهد گرفت
            </span>
          </p>
        </li>
      </ul>

      <ul className="flex justify-center gap-4">
        <li>
          <a
            href="https://web.whatsapp.com/send?phone=+989015854850"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="rounded-full w-10 h-10 bg-white/30 flex items-center justify-center text-white text-lg transition hover:bg-black"
          >
            {/* <FaWhatsapp /> */}
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/arman_novin_plastic/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="rounded-full w-10 h-10 bg-white/30 flex items-center justify-center text-white text-lg transition hover:bg-black"
          >
            {/* <FaInstagram /> */}
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/armannovinplasticpart"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="rounded-full w-10 h-10 bg-white/30 flex items-center justify-center text-white text-lg transition hover:bg-black"
          >
            {/* <FaFacebook /> */}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/armannovinplasticpart"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="rounded-full w-10 h-10 bg-white/30 flex items-center justify-center text-white text-lg transition hover:bg-black"
          >
            {/* <FaLinkedin /> */}
          </a>
        </li>
      </ul>
    </>
  );
};

export default FooterContact;
