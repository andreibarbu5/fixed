import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const MenuDropDown = () => {
  const { t: translate } = useTranslation("dropdown");
  return (
    <div className=" mb-12">
      <ul className=" flex flex-col items-center text-[#55595c] gap-4">
        <a
          className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  "
          href="#about"
        >
          <li>{translate("a1")}</li>
        </a>
        <a
          className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  "
          href="#trade"
        >
          <li>{translate("a2")}</li>
        </a>

        <a
          className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  "
          href="#team"
        >
          <li>{translate("a3")}</li>
        </a>

        <a
          className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  "
          href="#faq"
        >
          <li>{translate("a4")}</li>
        </a>
        <a
          className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  "
          href="#contact"
        >
          <li>{translate("a5")}</li>
        </a>

        <Link
          href="/login"
          className="hover:text-white duration-[150ms] ease-out bg-white hover:bg-[#55595c] text-center text-[18px] w-[80%] py-2 rounded-full  "
        >
          <li>{translate("a6")}</li>
        </Link>
      </ul>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "navbar",
        "footer",
        "imprint",
        "dropdown",
      ])),
    },
  };
}

export default MenuDropDown;
