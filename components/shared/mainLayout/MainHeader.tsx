import Link from "next/link";
import HeaderLogin from "./HeaderLogin";

const MainHeader = () => {
  return (
    <header className="sticky top-0 w-full py-4 shadow-lg bg-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <Link href="/">Logo</Link>

            <nav>
              <ul className="flex items-center gap-8">
                <li>
                  <Link
                    className="text-slate-700 transition hover:text-primary"
                    href="/"
                  >
                    امداد فوری
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-700 transition hover:text-primary"
                    href="/"
                  >
                    خدمات
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-700 transition hover:text-primary"
                    href="/"
                  >
                    برندها
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-700 transition hover:text-primary"
                    href="/"
                  >
                    اخبار و مقالات
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-700 transition hover:text-primary"
                    href="/"
                  >
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-700 transition hover:text-primary"
                    href="/"
                  >
                    تماس با ما
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <HeaderLogin />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
