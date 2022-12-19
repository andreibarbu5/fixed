import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

const impressum = () => {
  const { t: translate } = useTranslation("imprint");
  return (
    <div>
      <Navbar />
      {/* Title */}
      <div className="text-[#1c1f20]   px-5 max-w-[676px] md:max-w-[1000px] mx-auto">
        <div className="">
          <p className="text-[30px] md:text-[44px]   md:leading-[70px]  leading-[50px] font-semibold pt-12">
            {translate("t1")}
          </p>
          <p className="text-[18px] leading-[28px] pt-6 font-semibold">
            {translate("t2")}
          </p>
        </div>
        <div className="">
          <p className="text-[30px] md:text-[44px]  md:leading-[70px]  leading-[50px] font-semibold pt-16">
            {translate("t3")}
          </p>

          <p className="thin pt-6">
            <span className="font-bold"> {translate("t4")}</span>
            <br /> {translate("t5")} <br /> {translate("t6")}
          </p>
          <p className="thin pt-6">
            {translate("t7")}
            <br /> {translate("t8")} <br />
            {translate("t9")}
          </p>
        </div>

        <div className="">
          <p className="text-[30px] md:text-[44px]   leading-[50px] font-semibold pt-16">
            contact options
          </p>
          <p className="thin pt-6">
            <span className="font-bold">q-bility GmbH</span>
            <br /> Brünnlfeldstraße 3 <br /> 85302 Gerolsbach Alberzell
          </p>
          <p className="thin pt-6">{translate("mail")}</p>
        </div>

        <div className="">
          <p className="text-[30px] md:text-[44px]   leading-[50px] font-semibold pt-16">
            {translate("manage")}
          </p>
          <p className="thin pt-6  pb-12">
            {translate("t10")} <br /> {translate("t11")}
            <br /> {translate("t12")}
          </p>
        </div>
      </div>
      {/* Interested? */}
      <div className="bg-[#f9e5b3] pb-16 ">
        <p className="text-[26px] md:text-[33px]   leading-[40px] font-semibold pt-16 px-5 max-w-[676px]   mx-auto text-center md:max-w-[34rem]">
          {translate("yellow")} <br />
          {translate("yellow2")}
        </p>
        <div className="bg-[#2d5d56] w-[10rem] mx-auto text-center text-white py-2 rounded-full text-[13px] mt-5 shadow-md shadow-gray-500">
          <p>{translate("button")}</p>
        </div>
      </div>
      <Footer />
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
      ])),
    },
  };
}

export default impressum;
