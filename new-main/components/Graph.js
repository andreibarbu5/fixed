import React from "react";
import graph from "../assets/graph.jpg";
import stats from "../assets/stats.jpeg";
import { useTranslation } from "next-i18next";

import Image from "next/image";

const Graph = () => {
  const { t: translate } = useTranslation("about");
  return (
    <div className="relative max-w-[676px] md:max-w-[1000px] mx-auto mt-16 sm:mt-24 pb-12 md:mt-16 px-5">
      {translate("q1")}
      <Image src={stats} alt="" className="w-full h-full  " />
      {/* Help */}
      <div className="absolute bg-[#b4bec1] w-[4rem] md:w-[6rem] lg:w-[6.5rem] text-center rounded-full text-[14px] md:text-[17px] lg:text-[19px] shadow-md shadow-gray-500 top-[4%] left-[20%] md:top-[5%] md:left-[25%] lg:top-[5.3%] lg:left-[25%] group ">
        <p>Help</p>
        <div className="scale-0 group-hover:scale-[125%] absolute  -top-[11rem] bg-white text-[12px] duration-[50ms] ease-out shadow-md shadow-gray-500 rounded-[0.4rem] w-[5rem] -left-2 sm:left-0 sm:w-auto ">
          <p className="group-hover:scale-[80%]  duration-[50ms] ease-out">
            {translate("q1")}
          </p>
        </div>
      </div>
      {/* Qualities */}
      <div className="absolute bg-[#b4bec1] w-[6rem] lg:w-[7rem] text-center rounded-full shadow-md shadow-gray-500 text-[13px] md:text-[17px] lg:text-[19px] top-[13%] left-[17%] md:top-[14%] md:left-[18%] group">
        <p>Qualities</p>
        <div className="scale-0 group-hover:scale-[125%] absolute  -top-[8.4rem] bg-white text-[12px] duration-[50ms] ease-out shadow-md shadow-gray-500 rounded-[0.4rem] ">
          <p className="group-hover:scale-[80%]  duration-[50ms] ease-out">
            {translate("q2")}
          </p>
        </div>
      </div>
      {/* Price Chart */}
      <div className="absolute bg-[#b4bec1] w-[6rem] md:w-[6.5rem] lg:w-[7.5rem] text-center rounded-full shadow-md shadow-gray-500  text-[13px] md:text-[17px] lg:text-[19px] top-[13%] right-[18%] md:top-[14%] md:right-[20%] group">
        <p>PriceChart</p>
        <div className="scale-0 group-hover:scale-[125%] absolute  -top-[4.6rem] bg-white text-[12px] duration-[50ms] ease-out shadow-md shadow-gray-500 rounded-[0.4rem] ">
          <p className="group-hover:scale-[80%]  duration-[50ms] ease-out">
            {translate("q3")}
          </p>
        </div>
      </div>
      {/* Market Messages */}
      <div className="absolute bg-[#b4bec1] w-[8.5rem] md:w-[11rem] lg:w-[12.5rem] text-center rounded-full text-[13px] lg:text-[19px] shadow-md md:text-[17px] bottom-[36.5%] right-[13.5%] md:bottom-[33.5%] md:right-[15%] group ">
        <p className="whitespace-nowrap ">Market Messages</p>
        <div className="scale-0 group-hover:scale-[125%] absolute  -top-[5.9rem] bg-white text-[12px] duration-[50ms] ease-out shadow-md shadow-gray-500 rounded-[0.4rem] ">
          <p className="group-hover:scale-[80%]  duration-[50ms] ease-out max-w-[15rem]">
            {translate("q4")}
          </p>
        </div>
      </div>
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
        "graph",
        "about",
      ])),
    },
  };
}

export default Graph;
