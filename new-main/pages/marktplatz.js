import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Market = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[60vh] xs:px-5 text-[#1c1f20] max-w-[676px] md:max-w-[1000px] mx-auto ">
        <h1>MARKET PAGE</h1>

        <h1>MARKET PAGE</h1>
        <h1>MARKET PAGE</h1>
        <h1>MARKET PAGE</h1>
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
        "dropdown",
      ])),
    },
  };
}

export default Market;
