import React from "react";
import business from "@/assets/business.png";
import manikandan from "@/events/manikandan_sir.jpeg";
import sujaya from "@/events/sujaya_mam.jpeg";

import Image from "next/image";

const Coordinator = () => {
  return (
    <div className="hero group min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold m-2 group-hover:animate-[fade-in-down_2s_ease-in-out] text-secondary">Coordinator</h1>
          <div className="flex flex-wrap w-full justify-center">
            <div className="flex justify-evenly flex-wrap w-full m-2 ">
            <div
              className="m-2">
                <Image
                  className="mask mask-squircle group-hover:animate-[fade-in-left_2s_ease-in-out] "
                  height={200}
                  width={200}
                  src={manikandan}
                  alt="picture"
                />
                <h2 className=" font-bold text-xl text-primary group-hover:animate-[fade-in-left_2s_ease-in-out] ">Mr. Madhivanan</h2>
                <h2 className=" font-bold  text-secondary group-hover:animate-[fade-in-left_2s_ease-in-out] ">designation</h2>
                <div className="group-hover:animate-[fade-in-left_2s_ease-in-out]">icons</div>
              </div>
              <div
              className="m-2">
                <Image
                  className="mask mask-squircle group-hover:animate-[fade-in_2s_ease-in-out] "
                  height={200}
                  width={200}
                  src={manikandan}
                  alt="picture"
                />
                <h2 className=" font-bold text-xl text-primary group-hover:animate-[fade-in_2s_ease-in-out] ">Mr. Madhivanan</h2>
                <h2 className=" font-bold  text-secondary group-hover:animate-[fade-in_2s_ease-in-out] ">designation</h2>
                <div>icons</div>
              </div>
              <div
              className="m-2">
                <Image
                  className="mask mask-squircle group-hover:animate-[fade-in-right_2s_ease-in-out] "
                  height={200}
                  width={200}
                  src={sujaya}
                  alt="picture"
                />
                <h2 className=" font-bold text-xl text-primary group-hover:animate-[fade-in-right_2s_ease-in-out] ">Mr. Madhivanan</h2>
                <h2 className=" font-bold  text-secondary group-hover:animate-[fade-in-right_2s_ease-in-out] ">designation</h2>
                <div className="group-hover:animate-[fade-in-right_2s_ease-in-out]">icons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinator;
