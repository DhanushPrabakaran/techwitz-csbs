import React from "react";
import priyadharishini from "@/events/Priyadharishini_mam.jpg";
import sudarvili from "@/events/sudarvili_mam.jpeg";
import pavitra from "@/events/pavitra_mam.jpg";
import mohanapriya from "@/events/mohanapriya_mam.jpg";
import Image from "next/image";

const Staff = () => {
  return (
    <div className="hero group min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="w-full">
          <h1 className="text-4xl max-sm:text-2xl font-bold m-2 animate-[fade-in_2s_ease-in-out] text-secondary ">
            {"<<"}Staff Members{">>"}
          </h1>
          <div className="flex justify-center align-middle flex-wrap w-full m-2">
            <div className="m-2 items-center flex flex-col justify-between">
              <Image
                className="mask mask-squircle animate-[fade-in-left_2s_ease-in-out] "
                height={200}
                width={200}
                src={mohanapriya}
                alt="picture"
              />
              <div>
                <h2 className=" font-bold text-xl text-primary animate-[fade-in-left_2s_ease-in-out] ">
                  Mrs.D.Mohanapriya
                </h2>
                <h2 className=" font-bold  text-secondary animate-[fade-in-left_2s_ease-in-out]">
                  Assistant Professor / CSBS
                </h2>
              </div>

              {/* <div className="animate-[fade-in-left_2s_ease-in-out]">icons</div> */}
            </div>
            <div className="m-2 items-center flex flex-col justify-between">
              <Image
                className="mask mask-squircle animate-[fade-in-left_2s_ease-in-out] "
                height={200}
                width={200}
                src={priyadharishini}
                alt="picture"
              />
              <div>
                <h2 className=" font-bold text-xl text-primary animate-[fade-in-left_2s_ease-in-out] ">
                Mrs.S.Priyatharsini
                </h2>
                <h2 className=" font-bold  text-secondary animate-[fade-in-left_2s_ease-in-out]">
                  Assistant Professor / CSBS
                </h2>
              </div>
              {/* <div className="animate-[fade-in-left_2s_ease-in-out]">icons</div> */}
            </div>

            <div className="m-2 items-center flex flex-col justify-between">
              <Image
                className="mask mask-squircle animate-[fade-in-left_2s_ease-in-out] "
                height={200}
                width={200}
                src={pavitra}
                alt="picture"
              />
              <div>
                <h2 className=" font-bold text-xl text-primary animate-[fade-in-left_2s_ease-in-out] ">
                  Mrs.S.Pavithra
                </h2>
                <h2 className=" font-bold  text-secondary animate-[fade-in-left_2s_ease-in-out]">
                  Assistant Professor / CSBS
                </h2>
              </div>
              {/* <div className="animate-[fade-in-left_2s_ease-in-out]">icons</div> */}
            </div>
            <div className="m-2 items-center flex flex-col justify-between">
              <Image
                className="mask mask-squircle animate-[fade-in-left_2s_ease-in-out] "
                height={200}
                width={200}
                src={sudarvili}
                alt="picture"
              />
              <div>
                <h2 className=" font-bold text-xl text-primary animate-[fade-in-left_2s_ease-in-out] ">
                  Mrs.T.Sudarvizhi
                </h2>
                <h2 className=" font-bold  text-secondary animate-[fade-in-left_2s_ease-in-out]">
                  Assistant Professor / CSBS
                </h2>
              </div>
              {/* <div className="animate-[fade-in-left_2s_ease-in-out]">icons</div> */}
            </div>
          </div>

          {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Staff;
