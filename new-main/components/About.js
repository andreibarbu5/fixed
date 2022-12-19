import React from "react";
import Graph from "../components/Graph";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

const About = () => {
  const router = useRouter();
  const { locale, locales, push } = useRouter();
  const handleClick = (l) => {
    push("/", undefined, { locale: l });
  };
  const { t: translate } = useTranslation("about");
  return (
    <section className="" id="about">
      <div className=" bg-[#f9e5b3] pt-[4.8rem] mt-[4.8rem]">
        <div className="about flex flex-col md:flex-row  max-w-[676px] md:max-w-[1000px] mx-auto ">
          {/* Why q-bility? */}
          <div className="md:w-1/2 px-5">
            <h2 className="text-[36px] leading-[54px] font-['SemiBold']   mb-5">
              {translate("why")}
            </h2>
            <p className="leading-[2s4px]">{translate("why2")}</p>
          </div>
          {/* Advantages */}
          <div className="flex flex-col md:flex-row md:w-1/2 px-5 gap-x-4 ">
            {/* Left */}
            <div className="space-y-8 pt-8 md:pt-2 md:space-y-10">
              <div className="">
                <p className="font-bold text-[26px] leading-[35px]">
                  {translate("transparent")}
                </p>
                <p>{translate("transparent2")}</p>
              </div>
              <div className="">
                <p className="font-bold text-[26px] leading-[35px]">
                  {translate("innovative")}
                </p>
                <p> {translate("innovative2")}</p>
              </div>
              <div className="">
                <p className="font-bold text-[26px] leading-[35px]">
                  {translate("efficient")}
                </p>
                <p>{translate("efficient2")}</p>
              </div>
            </div>
            {/* Right */}
            <div className="md:space-y-10 space-y-8    pt-8 md:pt-2">
              <div className="lg:whitespace-nowrap">
                <p className="font-bold text-[26px] leading-[35px]">
                  {translate("digital")}
                </p>
                <p> {translate("digital2")}</p>
              </div>
              <div className="">
                <p className="font-bold text-[26px] leading-[35px]">
                  {translate("reliable")}
                </p>
                <p> {translate("reliable2")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Graph */}
        <Graph />
      </div>
    </section>
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
        "graph",
        "about",
      ])),
    },
  };
}
export default About;
