import React, { useState } from "react";
import Logo from "../public/Logo";
import MenuIcon from "../public/MenuIcon";
import CloseMenuIcon from "../public/CloseMenuIcon";
import MenuDropDown from "../components/MenuDropDown";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import en from "../assets/en.png";
import de from "../assets/de.png";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const router = useRouter();
  const { locale, locales, push } = useRouter();
  const handleClick = (l) => {
    push("/", undefined, { locale: l });
  };
  const closeMobileMenu = (e) => {
    setIsMenu(!isMenu);
  };

  const { t: translate } = useTranslation("navbar");
  return (
    <div className="sticky z-30 top-0 bg-[#2d5d56]">
      <div className="bg-[#2d5d56] relative z-20 px-6 md:px-7 py-[1.85rem] flex items-center justify-between max-w-[676px] md:max-w-[1000px] mx-auto">
        {/* Left Side - Logo */}
        <div className="">
          <Logo onClick={() => router.push("/")} className="cursor-pointer" />
        </div>

        {/* Right Side*/}

        {/* Burger Menu */}
        <div
          className="lg:hidden flex items-center gap-4"
          onClick={() => setIsMenu(!isMenu)}
        >
          {/* SELECT LANGUAGE */}
          <div className={`z-50  flex items-center gap-1 right-[5rem]  `}>
            <div className="">
              {locale == "de" ? (
                <Image src={de} className="w-6 h-6" />
              ) : (
                <Image src={en} className="w-6 h-6" />
              )}
            </div>
            <select
              id="language"
              onChange={(l) => handleClick(l.currentTarget.value)}
              value={locale}
              className="outline-none bg-[#2d5d56] text-white  text-center"
            >
              {locales?.map((l) => (
                <option key={l} value={l} id="option">
                  {l.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {isMenu ? (
            <CloseMenuIcon className="bg-[#2b5852] p-1 -my-1 rounded-md text-white text-[34px] " />
          ) : (
            <MenuIcon className="bg-[#2b5852] p-1 -my-1 rounded-md text-white text-[34px] " />
          )}
        </div>

        {/* Menu Items List */}
        <div className="hidden lg:block">
          <ul className="font-semibold flex items-center gap-x-10 text-white text-[14px] leading-[20px] ">
            <li className="hover:text-[#f6d787] duration-200 ease-out">
              <a href="#about">{translate("why")}</a>
            </li>
            <li className="hover:text-[#f6d787] duration-200 ease-out">
              <a href="#trade">{translate("trade")}</a>
            </li>
            <li className="hover:text-[#f6d787] duration-200 ease-out">
              <a href="#team">{translate("team")}</a>
            </li>
            <li className="hover:text-[#f6d787] duration-200 ease-out">
              <a href="#faq">{translate("knowledge")}</a>
            </li>
            <li className="hover:text-[#f6d787] duration-200 ease-out">
              <a href="#contact">{translate("contact")}</a>
            </li>
            <li className="hover:text-[#f6d787] duration-200 ease-out">
              <a
                onClick={() => router.push("/login")}
                className="cursor-pointer"
              >
                {translate("login")}
              </a>
            </li>
            {/* SELECT LANGUAGE */}
            <div
              className={`z-50  flex items-center gap-1 right-[5rem]  ${
                isMenu ? "hidden" : ""
              } `}
            >
              <div className="">
                {locale == "de" ? (
                  <Image src={de} className="w-6 h-6" />
                ) : (
                  <Image src={en} className="w-6 h-6" />
                )}
              </div>
              <select
                id="language"
                onChange={(l) => handleClick(l.currentTarget.value)}
                value={locale}
                className="outline-none bg-[#2d5d56] text-white  text-center"
              >
                {locales?.map((l) => (
                  <option key={l} value={l} id="option">
                    {l.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </ul>
        </div>
      </div>

      <div className="">
        {/* DropDown */}
        <div className="">
          <div
            className={`-translate-y-[25rem] ${
              isMenu && "translate-y-[0px]"
            } duration-300 ease-out lg:hidden rounded-full relative`}
          >
            <div
              className={`absolute bg-[#2d5d56] w-full  rounded-b-[0.8rem] ${
                isMenu && "shadow-lg shadow-black/30"
              }  `}
            >
              <MenuDropDown closeMobileMenu={closeMobileMenu} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar"])),
    },
  };
}

export default Navbar;
