import Link from "next/link";
import HeaderLogin from "./HeaderLogin";
import Image from "next/image";
import LogoImage from "@/public/images/logo.png";
import { Button } from "@/components/ui/button";
import { PhoneCallIcon } from "lucide-react";
import MenuItems from "./MenuItems";

const MainHeader = () => {
  return (
    <header className="sticky z-10 top-0 w-full py-4 shadow-lg bg-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={LogoImage}
              width={100}
              alt="امداد فوری"
              title="امداد فوری"
            />
          </Link>

          <nav className="grow md:flex md:justify-center">
            <MenuItems />
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="success" className="text-base" asChild>
              <a href="tel:+98" rel="noopener noreferrer nofollow" dir="ltr">
                <PhoneCallIcon className="scale-110" />
                021 123 45 67
              </a>
            </Button>
            <HeaderLogin />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
