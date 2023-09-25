import React from "react";
import business from "@/assets/business.png";
import Image from "next/image";
const Coordinator = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="">
          <div className="flex flex-wrap w-full justify-center">
            <div className="card w-96 bg-base-100 shadow-xl m-1">
              <div className="card-body justify-center flex items-center">
                <Image
                  className="mask mask-squircle"
                  height={180}
                  width={180}
                  src={business}
                  alt="picture"
                />
                <h2 className="card-title  justify-center">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl m-1">
              <div className="card-body justify-center flex items-center">
                <Image
                  className="mask mask-squircle"
                  height={180}
                  width={180}
                  src={business}
                  alt="picture"
                />
                <h2 className="card-title justify-center">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl m-1">
              <div className="card-body justify-center flex items-center">
                <Image
                  className="mask mask-squircle"
                  height={180}
                  width={180}
                  src={business}
                  alt="picture"
                />
                <h2 className="card-title justify-center">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold">Coordinator</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Coordinator;
