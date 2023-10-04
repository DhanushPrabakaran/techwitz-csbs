import React from "react";
import business from "@/assets/business.png";
import Image from "next/image";
const Event = () => {
  return (
    <div className="hero   min-h-screen w-screen flex flex-wrap justify-center">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" flex justify-center items-center flex-col w-full">
          <h1 className="text-4xl   max-sm:text-2xl font-bold animate-[fade-in-down_2s_ease-in-out]">
            {" "}
            {"<<"}Tech<span className=" text-secondary">Witz{">>"}</span>
          </h1>
          <h3 className="animate-[fade-in-down_2s_ease-in-out] text-center  max-sm:text-sm mb-2 italic">
            {`{ "`}Bridging Bits And Bucks Where InNovation Meets Investment!
            {`" }`}
          </h3>
          <p className=" italic animate-[fade-in-left_2s_ease-in-out] text-center max-sm:text-sm text-secondary ">
            Techwitz 2023 is not just an event; it{`'`}s a celebration of the
            boundless potential of technology and innovation.
            <br />
            The Inauguration of Techwitz 2023 will commence with an inspiring
            inaugural speech that will set the stage for the exciting events to
            come.
            <br />
            Following the inaugural speech, get ready for a whirlwind of
            thrilling events that will engage your intellect, challenge your
            perspectives, and leave you in awe of the incredible advancements in
            the tech world.
            <br />
            Techwitz 2023 is a convergence of brilliant minds, a hub of
            creativity, and a celebration of the human spirit{`'`}s relentless
            pursuit of progress. We invite you to immerse yourself in this
            unique experience and be a part of a community dedicated to shaping
            a brighter, more innovative tomorrow.
          </p>
          <div className="flex flex-wrap justify-center">
            <a href="https://quizizz.com/join?ref=header_tab">
            <div
              className=" relative max-sm:w-44 max-sm:h-16 w-56 bg-cover h-24  rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/originals/b6/a1/64/b6a164fe3c74eeb8fae8de7ad4b1d3ef.gif)",
              }}
            >
              <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
              <h1 className=" z-10 inline-block text-center max-sm:text-xl text-2xl hover:text-3xl duration-300 font-bold hover:text-secondary">
                Buiness quiz
              </h1>
            </div>
            </a>
            {/* https://communityinvite.netlify.app/ */}
            <a href="https://communityinvite.netlify.ap/" target="_blank">
            <div
              className=" relative max-sm:w-44 max-sm:h-16 w-56 bg-cover h-24  rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]"
              style={{
                backgroundImage:
                  "url(https://media.tenor.com/gfpuxIwUd8UAAAAC/the-doctor-leo-fitz.gif)",
              }}
            >
              <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
              <h1 className=" z-10 inline-block text-center max-sm:text-xl text-2xl hover:text-3xl duration-300 font-bold hover:text-secondary">
                Dev Geeks
                <br />
                Release
              </h1>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
