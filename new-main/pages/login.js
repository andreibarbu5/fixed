import React from "react";
import Navbar from "../components/Navbar";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className=" h-screen flex flex-col    items-center justify-center ">
        <h1>LOGIN PAGE</h1>

        <h1>ADD CODE HERE</h1>
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
        "dropdown",
      ])),
    },
  };
}

export default Login;
