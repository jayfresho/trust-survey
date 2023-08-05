"use client";

import styles from "@styles/tailwind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";
import { BsSun } from "react-icons/bs";
import { CiMenuKebab, CiMenuFries } from "react-icons/ci";
import ThemesMenu from "./ThemesMenu";
import { navbarLinks } from "@lib/data/navLinks";
import Button from "./Button";
import { GlobalContext } from "@providers/ContextProvider";

const Navbar = () => {
  const [showThemesMenu, setThemesMenu] = useState(false);
  const currentPath = usePathname();
  const { setToggleSidebar } = useContext(GlobalContext);

  return (
    <nav className="dark:bg-black-cus-1 bg-white-cus-1 shadow-md w-full fixed top-0 right-0 left-0 z-[9000]">
      <div
        className={`${styles.maxWidth} flex items-center justify-between px-[20px] md:px-[50px] h-[70px]`}
      >
        <div>
          <Link
            href="/"
            className="dark:text-white-cus-1 text-[24px] font-[700] leading-[24.55px] font-Nunito-Sans"
          >
            YAWOO
          </Link>
        </div>
        <div className="gap-[50px] h-full hidden lg:flex">
          <div className="flex gap-[25px] items-center dark:text-gray-cus-1 text-gray-500">
            {navbarLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  currentPath === item.href
                    ? "dark:text-white-cus-1 text-black-cus-1 font-[600]"
                    : null
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-[20px] items-center h-full">
            <div>
              <Link href="/contact">
                <Button>GET IN TOUCH</Button>
              </Link>
            </div>

            <div className="relative">
              <span
                className="text-[20px] cursor-pointer"
                onClick={() => setThemesMenu(!showThemesMenu)}
              >
                <BsSun />
              </span>
              <ThemesMenu
                showThemesMenu={showThemesMenu}
                onThemesMenuPress={() => setThemesMenu(!showThemesMenu)}
              />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden items-center gap-x-[15px]">
          <div className="relative">
            <span
              className="text-[20px] cursor-pointer"
              onClick={() => setThemesMenu(!showThemesMenu)}
            >
              <CiMenuKebab size={14} />
            </span>
            <ThemesMenu
              showThemesMenu={showThemesMenu}
              onThemesMenuPress={() => setThemesMenu(!showThemesMenu)}
            />
          </div>
          <div>
            <span onClick={() => setToggleSidebar(true)}>
              <CiMenuFries size={20} />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
