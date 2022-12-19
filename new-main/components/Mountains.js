import Image from "next/image";
import React from "react";
import mountains from "../assets/mountains.jpeg";
import { useTranslation } from "next-i18next";
const Mountains = () => {
  const { t: translate } = useTranslation("team");
  return (
    <div className="px-5 max-w-[676px] md:max-w-[1000px] mx-auto pt-20">
      <div className="md:flex">
        <p className="font-semibold text-[26px] leading-[34px] md:w-1/2">
          {translate("title2")}
        </p>
        <div className="md:pl-4 md:w-1/2">
          <p className="pt-6 md:pt-0 text-[16px]   font-thin leading-[25px]">
            {translate("title3")}
          </p>
          <p className="pt-6 text-[16px] leading-[25px]">
            {translate("title4")}
          </p>
        </div>
      </div>
      <div className="pt-12">
        <Image src={mountains} className="rounded-[2rem]" />
      </div>
    </div>
  );
};

export default Mountains;
