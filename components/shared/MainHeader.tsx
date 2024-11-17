"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify, CircleX, PhoneCallIcon } from "lucide-react";
import LogoImage from "@/public/images/logo.png";
import HeaderLogin from "./HeaderLogin";
import MenuItems from "./MenuItems";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/button";

const MainHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      {showMenu && (
        <>
          <div
            className="overlay cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          ></div>
          <MobileMenu />
        </>
      )}

      <header className="sticky z-10 top-0 w-full py-3 lg:py-0 shadow-lg bg-white">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <Button
              variant="default"
              className="inline-flex lg:hidden w-11 h-10 p-0 px-2"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <CircleX /> : <AlignJustify />}
            </Button>

            <Link href="/">
              <Image
                src={LogoImage}
                width={100}
                alt="امداد فوری"
                title="امداد فوری"
              />
            </Link>

            <nav className="hidden lg:grow lg:flex lg:justify-center">
              <MenuItems />
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="success" className="text-base" asChild>
                <a href="tel:+98" rel="noopener noreferrer nofollow" dir="ltr">
                  <PhoneCallIcon className="scale-110" />
                  <span className="hidden sm:inline-block">021 123 45 67</span>
                </a>
              </Button>
              <HeaderLogin />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
