import React from "react";
import business from "@/assets/business.png";
import Image from "next/image";
const Event = () => {
  return (
    <div className="hero   min-h-screen w-screen flex flex-wrap bg-base-200 justify-center">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" flex justify-center items-center flex-col w-full">
          <h1 className="text-6xl font-bold animate-[fade-in-down_2s_ease-in-out]">
            Tech <span className=" text-secondary">Witz</span>
          </h1>
          <p className="py-6 animate-[fade-in-left_2s_ease-in-out] text-center text-secondary">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div
          className="flex flex-wrap justify-center">
          <div
          className=" relative w-56 bg-cover h-24  rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]" style={{backgroundImage: 'url(https://i.pinimg.com/originals/b6/a1/64/b6a164fe3c74eeb8fae8de7ad4b1d3ef.gif)'}}>
        <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
            <h1
            className=" z-10 inline-block text-center text-2xl hover:text-3xl duration-300 font-bold hover:text-secondary">
              Buiness quiz
            </h1>
          </div>
          <div
          className=" relative w-56 bg-cover h-24  rounded-md text-center flex justify-center items-center m-2 cursor-pointer animate-[fade-in_2s_ease-in-out]" style={{backgroundImage: 'url(https://media.tenor.com/gfpuxIwUd8UAAAAC/the-doctor-leo-fitz.gif)'}}>
        <div className=" rounded-md absolute bg-neutral w-full h-full bg-opacity-80"></div>
            <h1
            className=" z-10 inline-block text-center text-2xl hover:text-3xl duration-300 font-bold hover:text-secondary">
               Dev Geeks 
              <br />
              Release
            
            </h1>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Event;
