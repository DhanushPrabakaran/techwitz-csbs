import React from "react";
import madhivanan from "@/events/madhivanan_sir.jpg";
import manikandan from "@/events/manikandan_sir.jpeg";
import sujaya from "@/events/sujaya_mam.jpeg";

import Image from "next/image";

const Coordinator = () => {
  return (
    <div className="hero group min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-3xl max-sm:text-2xl font-bold m-2 animate-[fade-in-down_2s_ease-in-out] text-secondary">
            {"<<"}Staff Coordinator{">>"}
          </h1>
          <div className="flex flex-wrap w-full justify-center">
            <div className="flex justify-evenly flex-wrap w-full m-2 ">
            <div className="m-2 items-center flex flex-col">
                <Image
                  className="mask mask-squircle animate-[fade-in_2s_ease-in-out] "
                  height={200}
                  width={200}
                  src={madhivanan}
                  alt="picture"
                />
                <h2 className=" font-bold text-xl text-primary animate-[fade-in_2s_ease-in-out] ">
                  Mr.P.Mathivanan
                </h2>
                <h2 className=" font-bold  text-secondary animate-[fade-in_2s_ease-in-out] ">
                  Assistant Professor / CSBS
                </h2>
                {/* <div>icons</div> */}
              </div>

              <div className="m-2 items-center flex flex-col">
                <Image
                  className="mask mask-squircle animate-[fade-in-left_2s_ease-in-out] "
                  height={200}
                  width={200}
                  src={manikandan}
                  alt="picture"
                />
                <h2 className=" font-bold text-xl text-primary animate-[fade-in-left_2s_ease-in-out] ">
                  Mr.C.Vignesh Manikandan
                </h2>
                <h2 className=" font-bold  text-secondary animate-[fade-in-left_2s_ease-in-out]">
                  Assistant professor / CSBS
                </h2>
                {/* <div className="animate-[fade-in-left_2s_ease-in-out]">icons</div> */}
              </div>
              
              <div className="m-2 items-center flex flex-col">
                <Image
                  className="mask mask-squircle animate-[fade-in-right_2s_ease-in-out] "
                  height={200}
                  width={200}
                  src={sujaya}
                  alt="picture"
                />
                <h2 className=" font-bold text-xl text-primary animate-[fade-in-right_2s_ease-in-out] ">
                  Mrs.S.Sujaya
                </h2>
                <h2 className=" font-bold  text-secondary animate-[fade-in-right_2s_ease-in-out] ">
                  Assistant professor / CSBS
                </h2>
                {/* <div className="animate-[fade-in-right_2s_ease-in-out]">icons</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinator;
