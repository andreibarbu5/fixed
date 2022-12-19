import Image from "next/image";
import React from "react";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import Mail from "../public/MailSvg";
import LinkedIn from "../public/LinkedInSvg";
import { useTranslation } from "next-i18next";

const Team = () => {
  const { t: translate } = useTranslation("trade");
  return (
    <div
      id="team"
      className=" px-5 max-w-[676px] md:max-w-[1000px] mx-auto mt-20"
    >
      {/* Title */}
      <p className="text-[32px] font-semibold leading-[54px]">
        {translate("title")}
      </p>

      {/* Team */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-5">
        {/* Card 1 */}
        <div className="h-[340px] sm:h-[380px] md:h-[400px] w-full bg-blue-400 rounded-[2rem] relative flex flex-col justify-end ">
          <Image
            src={one}
            className="absolute object-cover h-full w-full rounded-[2rem] "
          />
          <div className="absolute object-cover h-full w-full rounded-[2rem]  "></div>
          <div className="relative px-6 py-4 ">
            <div className="">
              {/* Name */}
              <p className="text-white text-[22px] md:text-[18px] leading-[28px] font-semibold lg:text-[22px]">
                Jan Röstel
              </p>
              {/* Title */}
              <p className="text-white md:text-[12px] lg:text-[17px]">
                Head of Sales & Co-Founder
              </p>
              {/* Socials */}
              <div className="flex items-center justify-center gap-12 md:gap-10 pt-4 ">
                <a href="mailto:jan.roestel@q-bility.com">
                  <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                    <Mail />
                  </div>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/jan-r%C3%B6stel-189209222/"
                  target="_blank"
                >
                  <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                    <LinkedIn />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="h-[340px] sm:h-[380px] md:h-[400px] w-full bg-blue-400 rounded-[2rem] relative flex flex-col justify-end ">
          <Image
            src={two}
            className="absolute object-cover h-full w-full rounded-[2rem] "
          />
          <div className="absolute object-cover h-full w-full rounded-[2rem]  "></div>
          <div className="relative px-6 py-4 ">
            <div className="">
              {/* Name */}
              <p className="text-white text-[22px] md:text-[18px] leading-[28px] font-semibold lg:text-[22px] ">
                Dennis Horn
              </p>
              {/* Title */}
              <p className="text-white md:text-[12px] lg:text-[17px]">
                Head of Product & Co-Founder
              </p>
              {/* Socials */}
              <div className="flex items-center justify-center gap-12 md:gap-10 pt-4 ">
                <a href="mailto:dennis.horn@q-bility.com">
                  <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                    <Mail />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/dennis-horn-553852204/"
                  target="_blank"
                >
                  <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                    <LinkedIn />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="h-[340px] sm:h-[380px] md:h-[400px] w-full bg-blue-400 rounded-[2rem] relative flex flex-col justify-end ">
          <Image
            src={three}
            className="absolute object-cover h-full w-full rounded-[2rem] "
          />
          <div className="absolute object-cover h-full w-full rounded-[2rem]  "></div>
          <div className="relative px-6 py-4 ">
            <div className="">
              {/* Name */}
              <p className="text-white text-[22px] md:text-[18px] lg:text-[22px] leading-[28px] font-semibold">
                Dominik Trisl
              </p>
              {/* Title */}
              <p className="text-white md:text-[12px] lg:text-[17px]">
                Managing Director & Co-Founder
              </p>
              {/* Socials */}
              <div className="flex items-center justify-center gap-12 md:gap-10 pt-4 ">
                <a href="mailto:dominik.trisl@q-bility.com">
                  <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                    <Mail />
                  </div>
                </a>

                <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                  <a
                    href="https://www.linkedin.com/in/dominiktrisl/"
                    target="_blank"
                  >
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="h-[340px] sm:h-[380px] md:h-[400px] w-full bg-blue-400 rounded-[2rem] relative flex flex-col justify-end ">
          <Image
            src={four}
            className="absolute object-cover h-full w-full rounded-[2rem] "
          />
          <div className="absolute object-cover h-full w-full rounded-[2rem]  "></div>
          <div className="relative px-4 py-4 ">
            <div className="">
              {/* Name */}
              <p className="text-white   text-[22px] md:text-[18px] lg:text-[22px] leading-[28px] font-semibold">
                Dennis Geilus
              </p>
              {/* Title */}
              <p className="text-white md:text-[12px] lg:text-[17px]">
                Head of Operations & Co-Founder
              </p>
              {/* Socials */}
              <div className="flex items-center justify-center gap-12 md:gap-10 pt-4 ">
                <a href="mailto:dennis.geilus@q-bility.com">
                  <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                    <Mail />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/dennis-g-a75458214/"
                  target="_blank"
                >
                  <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                    <LinkedIn />
                  </div>
                </a>
              </div>
            </div>
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

export default Team;
