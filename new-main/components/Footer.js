import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
const Footer = () => {
  const router = useRouter();
  const { t: translate } = useTranslation("footer");
  return (
    <div className="bg-[#1c1f20]">
      <div className="px-5 max-w-[676px] md:max-w-[1000px] mx-auto md:flex items-center md:items-start justify-between text-white pt-6">
        <div className="w-full">
          <ul className="  md:space-y-4 pb-10">
            <li className="cursor-pointer">
              <a href="#"> {translate("home")}</a>
            </li>
            <li className="cursor-pointer">
              <a>{translate("conditions")} </a>
            </li>
            <li className="cursor-pointer">
              <a>{translate("data")}</a>
            </li>

            <li
              onClick={() => router.push("/impressum")}
              className="cursor-pointer"
            >
              <a>{translate("imprint")}</a>
            </li>
          </ul>
          <p className="pb-8 ">
            © q-bility 2022. <br /> {translate("copyright2")}
          </p>
        </div>
        <div className="w-full pb-6 ">
          <p>
            {translate("adress")} <br /> {translate("adress2")} <br />{" "}
            {translate("adress3")}
            <br />
            {translate("adress4")}
          </p>
        </div>
        <div className="w-full">
          <p className="text-[20px] leading-[28px] text-[#f4cd69] pt-2 md:pt-0  pb-8 font-semibold">
            {translate("yellow")}
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer"])),
    },
  };
}

export default Footer;
