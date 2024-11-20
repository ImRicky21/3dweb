import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  IoBook,
  IoBookOutline,
  IoHome,
  IoHomeOutline,
  IoPieChartOutline,
} from "react-icons/io5";
import { PiStudent, PiStudentFill } from "react-icons/pi";

export default function Navbar() {
  const route = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      <nav
        className={` fixed top-0 left-0 right-0 md:bg-white z-10 p-4 transition-all justify-center hidden md:flex md:justify-start ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        <ul>
          <li className="flex gap-4">
            <Link
              href="/home"
              className={`${route.pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/materi"
              className={`${route.pathname === "/" ? "active" : ""} `}
            >
              Materi
            </Link>
            <Link
              href="/evaluasi"
              className={`${route.pathname === "/" ? "active" : ""}`}
            >
              Evaluasi
            </Link>
            <Link
              href="/"
              className={`${route.pathname === "/" ? "active" : ""}`}
            >
              ajshdak
            </Link>
          </li>
        </ul>
      </nav>
      {/* mobile navbar */}
      <nav
        className={`md:hidden flex fixed bottom-0 left-0 right-0 md:bg-white z-10 p-4 bg-blue-300 mx-6 mb-3 rounded-full transition-all justify-center ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        <ul>
          <li className="flex gap-12 justify-around flex-wrap">
            <Link
              href="/home"
              className={`${route.pathname === "/" ? "active" : ""} text-2xl`}
            >
              {route.pathname === "/home" ? <IoHome /> : <IoHomeOutline />}
              {/* {<AiOutlineHome />}    */}
            </Link>
            <Link
              href="/materi"
              className={`${route.pathname === "/" ? "active" : ""} text-2xl `}
            >
              {route.pathname === "/materi" ? <IoBook /> : <IoBookOutline />}
            </Link>
            <Link
              href="/evaluasi"
              className={`${route.pathname === "/" ? "active" : ""} text-2xl`}
            >
              {route.pathname === "/evaluasi" ? (
                <PiStudentFill />
              ) : (
                <PiStudent />
              )}
            </Link>
            <Link
              href="/"
              className={`${route.pathname === "/" ? "active" : ""} text-2xl`}
            >
              {<IoPieChartOutline />}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
