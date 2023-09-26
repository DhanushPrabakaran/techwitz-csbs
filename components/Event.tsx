import React from "react";
import business from "@/assets/business.png";
import Image from "next/image";
const Event = () => {
  return (
    <div className="hero min-h-screen w-screen flex flex-wrap bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}

        <div className=" flex justify-center items-center flex-col w-full">
          <h1 className="text-6xl font-bold">
            Tech <span className=" text-neutral">Witz</span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          
        </div>
        <div
        className=" flex flex-col lg:flex-row">
        {/*
          <div className="card w-96 bg-base-100 shadow-xl image-full m-1">
            <figure>
              <Image src={business} className="" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl image-full m-1">
            <figure>
              <Image 
              src={business} 
              alt="Shoes" 
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Event;
