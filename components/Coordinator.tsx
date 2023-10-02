import React from "react";
import business from "@/assets/business.png";
import Image from "next/image";
const Coordinator = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold m-2">Coordinator</h1>
          <div className="flex flex-wrap w-full justify-center">
            <div className="flex justify-evenly flex-wrap w-full m-2 ">
              <div>
                <Image
                  className="mask mask-squircle"
                  height={200}
                  width={200}
                  src={business}
                  alt="picture"
                />
                <h2 className=" font-bold">staff name</h2>
                <h3>designation</h3>
                <div>icons</div>
              </div>
              <div>
                <Image
                  className="mask mask-squircle"
                  height={200}
                  width={200}
                  src={business}
                  alt="picture"
                />
                <h2 className=" font-bold">staff name</h2>
                <h3>designation</h3>
                <div>icons</div>
              </div>
              <div>
                <Image
                  className="mask mask-squircle"
                  height={200}
                  width={200}
                  src={business}
                  alt="picture"
                />
                <h2 className=" font-bold">staff name</h2>
                <h3>designation</h3>
                <div>icons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinator;
