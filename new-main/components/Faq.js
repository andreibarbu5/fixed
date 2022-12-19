import React, { useState } from "react";
import ArrowUp from "../public/ArrowUp";
import ArrowDown from "../public/ArrowDown";

import { useTranslation } from "next-i18next";

import FaqElement from "./FaqElement";
const Faq = () => {
  const { t: translate } = useTranslation("faq");
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);
  const [faq, setFaq] = useState([
    {
      question: "Für was steht eigentlich q-bility?",
      answer:
        "q wie kann es anders sein steht für Quote und bility für mobility oder ability. Such’s dir aus! ",
      open: false,
    },
    {
      question: "Welche Kraftstoffe sind quotenfähig?",
      answer: "Fahrstrom, Bio-LNG, Biomethan, Biogas, Wasserstoff, E-Fuels",
      open: false,
    },
    {
      question: "Wer kann über q-bility Quoten handeln?",
      answer:
        "Betreiber von E-Ladesäulen, Biomethantankstellenbetreiber, Bio-LNG Produzenten, Händler (per Vollmacht), Quotenverpflichtete, Broker, Pooling-Dienstleister, Wasserstoffproduzenten ",
      open: false,
    },
    {
      question: "Was sind die relevanten Gesetze?",
      answer:
        "RED II, Biokraftstoffnachhaltigkeitsverordnung, BImSchV, BImSchG ",
      open: false,
    },
    {
      question: "Was sind die relevanten Behörden?",
      answer:
        "Hauptzollamt Frankfurt (Oder) HZA, Umweltbundesamt UBA, Deutsche Emissionshandelsstelle DEHSt",
      open: false,
    },
  ]);

  const toggle1 = (index) => {
    setQ1(!q1);
  };
  const toggle2 = (index) => {
    setQ2(!q2);
  };
  const toggle3 = (index) => {
    setQ3(!q3);
  };
  const toggle4 = (index) => {
    setQ4(!q4);
  };
  const toggle5 = (index) => {
    setQ5(!q5);
  };
  return (
    <div
      id="faq"
      className="  px-5 max-w-[676px] md:max-w-[1000px] mx-auto pt-24 md:flex"
    >
      {/* Title */}
      <p className="text-[36px] leading-[54px] font-semibold pb-8 md:w-[30%] md:-mt-2 ">
        {translate("title")}
      </p>
      {/* FAQ */}
      <div className="border-b pb-1 border-black md:w-[70%]">
        {/* {faq.map((faq, index, key) => (
          <FaqElement
            question={faq.question}
            answer={faq.answer}
            open={faq.open}
            index={index}
            key={index}
            // toggle={toggle}
          />
        ))} */}
        {/* Card1 */}
        <div
          className={`bg-white   ${q1 ? "h-full md:h-auto" : "h-[5rem]"}`}
          onClick={(e) => toggle1(e)}
        >
          <div className="relative z-10 flex items-center justify-between bg-white h-full md:h-auto border-t  border-black py-[30px] lg:py-[20px]">
            <p className="text-[20px] leading-[28px]">{translate("q1")}</p>
            <div className="">
              {q1 ? (
                <ArrowUp className="w-9 h-9" />
              ) : (
                <ArrowDown className="w-9 h-9" />
              )}
            </div>
          </div>
          <div className={`${q1 ? "h-full  " : "h-0"}   overflow-hidden`}>
            <div
              className={`${
                q1
                  ? "max-h-full   duration-500 ease-in-out after:max-h-[55px]"
                  : "max-h-0 duration-[200ms] ease-out"
              }`}
            >
              <div
                className={`${
                  q1
                    ? "translate-y-0 duration-[200ms] ease-in-out "
                    : "-translate-y-20  duration-200 ease-in-out"
                }`}
              >
                <p className="thin -mt-1  duration-300 pb-[35px]">
                  {translate("a1")}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card2 */}
        <div
          className={`bg-white   ${q2 ? "h-full md:h-auto" : "h-[5rem]"}`}
          onClick={(e) => toggle2(e)}
        >
          <div className="relative z-10 flex items-center justify-between bg-white h-full md:h-auto border-t  border-black py-[30px] lg:py-[20px]">
            <p className="text-[20px] leading-[28px]">{translate("q2")}</p>
            <div className="">
              {q2 ? (
                <ArrowUp className="w-9 h-9" />
              ) : (
                <ArrowDown className="w-9 h-9" />
              )}
            </div>
          </div>
          <div className={`${q2 ? "h-full  " : "h-0"}   overflow-hidden`}>
            <div
              className={`${
                q2
                  ? "max-h-full   duration-500 ease-in-out after:max-h-[55px]"
                  : "max-h-0 duration-[200ms] ease-out"
              }`}
            >
              <div
                className={`${
                  q2
                    ? "translate-y-0 duration-[200ms] ease-in-out "
                    : "-translate-y-20  duration-200 ease-in-out"
                }`}
              >
                <p className="thin -mt-1  duration-300 pb-[35px]">
                  {translate("a2")}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card3 */}
        <div
          className={`bg-white   ${q3 ? "h-full md:h-auto" : "h-[5rem]"}`}
          onClick={(e) => toggle3(e)}
        >
          <div className="relative z-10 flex items-center justify-between bg-white h-full md:h-auto border-t  border-black py-[30px] lg:py-[20px]">
            <p className="text-[20px] leading-[28px]">{translate("q3")}</p>
            <div className="">
              {q3 ? (
                <ArrowUp className="w-9 h-9" />
              ) : (
                <ArrowDown className="w-9 h-9" />
              )}
            </div>
          </div>
          <div className={`${q3 ? "h-full  " : "h-0"}   overflow-hidden`}>
            <div
              className={`${
                q3
                  ? "max-h-full   duration-500 ease-in-out after:max-h-[55px]"
                  : "max-h-0 duration-[200ms] ease-out"
              }`}
            >
              <div
                className={`${
                  q3
                    ? "translate-y-0 duration-[200ms] ease-in-out "
                    : "-translate-y-20  duration-200 ease-in-out"
                }`}
              >
                <p className="thin -mt-1  duration-300 pb-[35px]">
                  {translate("a3")}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card4 */}
        <div
          className={`bg-white   ${q4 ? "h-full md:h-auto" : "h-[5rem]"}`}
          onClick={(e) => toggle4(e)}
        >
          <div className="relative z-10 flex items-center justify-between bg-white h-full md:h-auto border-t  border-black py-[30px] lg:py-[20px]">
            <p className="text-[20px] leading-[28px]">{translate("q4")}</p>
            <div className="">
              {q4 ? (
                <ArrowUp className="w-9 h-9" />
              ) : (
                <ArrowDown className="w-9 h-9" />
              )}
            </div>
          </div>
          <div className={`${q4 ? "h-full  " : "h-0"}   overflow-hidden`}>
            <div
              className={`${
                q4
                  ? "max-h-full   duration-500 ease-in-out after:max-h-[55px]"
                  : "max-h-0 duration-[200ms] ease-out"
              }`}
            >
              <div
                className={`${
                  q4
                    ? "translate-y-0 duration-[200ms] ease-in-out "
                    : "-translate-y-20  duration-200 ease-in-out"
                }`}
              >
                <p className="thin -mt-1  duration-300 pb-[35px]">
                  {translate("a4")}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card5 */}
        <div
          className={`bg-white   ${q5 ? "h-full md:h-auto" : "h-[5rem]"}`}
          onClick={(e) => toggle5(e)}
        >
          <div className="relative z-10 flex items-center justify-between bg-white h-full md:h-auto border-t  border-black py-[30px] lg:py-[20px]">
            <p className="text-[20px] leading-[28px]">{translate("q5")}</p>
            <div className="">
              {q5 ? (
                <ArrowUp className="w-9 h-9" />
              ) : (
                <ArrowDown className="w-9 h-9" />
              )}
            </div>
          </div>
          <div className={`${q5 ? "h-full  " : "h-0"}   overflow-hidden`}>
            <div
              className={`${
                q5
                  ? "max-h-full   duration-500 ease-in-out after:max-h-[55px]"
                  : "max-h-0 duration-[200ms] ease-out"
              }`}
            >
              <div
                className={`${
                  q5
                    ? "translate-y-0 duration-[200ms] ease-in-out "
                    : "-translate-y-20  duration-200 ease-in-out"
                }`}
              >
                <p className="thin -mt-1  duration-300 pb-[35px]">
                  {translate("a5")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
