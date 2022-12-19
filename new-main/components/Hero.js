import React from "react";
import DiagramLogo from "../public/DiagramLogo";
import img from "../assets/img.png";
import Image from "next/image";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t: translate } = useTranslation("hero");
  const router = useRouter();
  const { locale, locales, push } = useRouter();
  const handleClick = (l) => {
    push("/", undefined, { locale: l });
  };

  return (
    <div className="w-full ">
      {/* Slide Under Navbar START */}
      <div className="static h-8 w-full flex  ">
        <Image src={img} className="w-full h-[3.1rem] sm:h-[2.3rem]" />
      </div>
      {/* Slide Under Navbar END*/}

      {/* HERO */}
      <div className="px-3 xs:px-5 text-[#1c1f20] max-w-[676px] md:max-w-[1000px] mx-auto mb-16 pt-4  ">
        {/* Main Title */}
        <div className="pt-8 xs:pt-12">
          <p className=" text-[35px] xs:text-[42px] sm:text-[45px] md:text-[58px] md:leading-[70px] font-['SemiBold'] leading-[50px]">
            {translate("title")} <br /> {translate("title2")}
          </p>
        </div>

        <div className="description flex flex-col md:flex-row pt-[3.5rem] md:pt-[1.8rem] text-[18px] xs:text-[20px] leading-[28px]">
          {/* Left Descritpion */}
          <div className=" md:w-1/2 pr-5 md:mt-20">
            <div className="space-y-4">
              <p className="">{translate("quota1")}</p>
              <p>{translate("quota2")}</p>
              <p> {translate("quota3")}</p>
            </div>

            <div className="bg-[#f4cd69] px-2 py-1.5 flex justify-center items-center rounded-full  mt-9 w-[277.14px] text-[14px]  shadow-md shadow-gray-500 font-bold ">
              <button
                className="tracking-[.03em]"
                onClick={() => router.push("/marktplatz")}
              >
                {translate("button")}
              </button>
            </div>
          </div>

          {/* Diagram */}
          <div className="pt-6 md:pt-0  md:w-1/2 md:flex md:items-start md:p-2">
            {locale == "de" ? (
              <DiagramLogo className="w-full h-full max-w-[463px] mx-auto " />
            ) : (
              <DiagramLogo className="w-full h-full max-w-[463px] mx-auto  " />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["hero"])),
    },
  };
}

export default Hero;
