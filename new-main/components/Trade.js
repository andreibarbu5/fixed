import Image from "next/image";
import React from "react";
import background from "../assets/background.png";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Trade = () => {
  const { t: translate } = useTranslation("trade");
  const router = useRouter();
  const { locale, locales, push } = useRouter();

  return (
    <div id="trade" className="mt-10 sm:mt-16   ">
      {/* Title */}
      <p className="relative z-10 text-[36px] leading-[54px] text-center  font-bold  px-5 max-w-[676px] md:max-w-[1000px] mx-auto">
        {translate("title")}
      </p>

      <div className="relative">
        {/* Background Image */}
        <div className="absolute w-full h-full   flex">
          <Image src={background} className="object-cover w-full" />
        </div>
        <div className=" px-5 max-w-[676px] md:max-w-[1000px] mx-auto">
          {/* Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 mt-16 gap-5">
            {/* Card 1 */}
            <div className="bg-[#f4cd69] min-h-[270px] rounded-[1rem] w-full px-10 py-12">
              <p className="font-bold text-[20px] leading-[28px] pb-5">
                {translate("text1")}
              </p>
              <p>{translate("text2")}</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#2d5d56] rounded-[1rem] w-full px-10 py-12 text-white">
              <p className="font-bold text-[20px] leading-[28px] pb-5">
                {translate("text3")}
              </p>
              <p>{translate("text4")}</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#b4bec1] rounded-[1rem] w-full px-10 py-12">
              <p className="font-bold text-[20px] leading-[28px] pb-5">
                {translate("text5")}
              </p>
              <p>{translate("text6")}</p>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="relative z-10 mt-4 md:mt-8 space-y-4 md:space-y-0 px-5 max-w-[676px] md:max-w-[1000px] mx-auto md:flex md:gap-4">
          {/* Button 1 */}
          <div
            className="  bg-[#f4cd69] py-2.5 md:py-2 rounded-full text-center  md:w-[25rem] mx-auto shadow-md shadow-gray-400 cursor-pointer    "
            onClick={() => router.push("/marktplatz")}
          >
            <a>{translate("button1")}</a>
          </div>
          {/* Button 2 */}
          <div
            className="bg-[#f4cd69] py-2.5 md:py-2  rounded-full text-center  md:w-[25rem] mx-auto shadow-md shadow-gray-400 cursor-pointer"
            onClick={() => router.push("/marktplatz")}
          >
            <a>{translate("button2")}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["trade"])),
    },
  };
}

export default Trade;
