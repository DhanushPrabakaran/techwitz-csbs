import React from "react";
import business from "@/assets/business.png";
import Image from "next/image";
const Event = () => {
  return (
    <div className="hero min-h-screen w-screen flex flex-wrap bg-base-200 justify-center">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" flex justify-center items-center flex-col w-full">
          <h1 className="text-6xl font-bold">
            Tech <span className=" text-secondary">Witz</span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div
          className="  flex flex-wrap">
          <div
          className="w-60 h-32 rounded-md text-center flex justify-center items-center m-2 cursor-pointer" style={{backgroundImage: 'url(https://www.esds.co.in/blog/wp-content/uploads/2019/05/Productivity-and-efficeincy.gif)'}}>
            <h1
            className=" inline-block text-center text-4xl hover:text-5xl duration-300 font-bold hover:text-secondary">
              Buiness quiz
            </h1>
          </div>

          <div
          className="w-60 h-32 rounded-md text-center flex justify-center items-center m-2 cursor-pointer" style={{backgroundImage: 'url(https://www.esds.co.in/blog/wp-content/uploads/2019/05/Productivity-and-efficeincy.gif)'}}>
            <h1
            className=" inline-block text-center text-4xl hover:text-5xl duration-300 font-bold hover:text-secondary">
              Suspence
            </h1>
          </div>
          </div>
        </div>
        <div
        className=" flex flex-col lg:flex-row">
        
        </div>
      </div>
    </div>
  );
};

export default Event;
