import React from "react";
import Dean_Mam from "@/events/Dean_mam.jpeg";

import Image from "next/image";
const Hod = () => {
  return (
    <div
      className="hero group min-h-screen bg-fixed"
      style={{
        backgroundImage:
          "url(https://www.esds.co.in/blog/wp-content/uploads/2019/05/Productivity-and-efficeincy.gif)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="mb-5 text-3xl max-md:text-xl font-bold uppercase inline-flex text-secondary animate-[fade-in-down_2s_ease-in-out]">
            {"<"}Head Of The Department{">"}
          </h1>
          <Image
            className="mask mask-squircle animate-[fade-in_2s_ease-in-out] max-md:w-48"
            height={300}
            width={300}
            src={Dean_Mam}
            alt="picture"
          />
          {/* <h1 className="text-5xl font-bold animate-[fade-in-down_2s_ease-in-out] text-secondary">
            Chief Guest{" "}
          </h1> */}
          <h2 className=" font-bold m-2 text-3xl text-primary animate-[fade-in-left_2s_ease-in-out] ">
          Dr.K.Mahalakshmi
          </h2>
          <h2 className=" font-bold text-2xl m-2  text-secondary animate-[fade-in-left_2s_ease-in-out] ">
          Dean Placements,HOD-CSBS
          </h2>
          <div className="animate-[fade-in-left_2s_ease-in-out] text-xl m-2 font-bold ">
          KIT - KALAIGNARKARUNANIDHI INSTITUTE OF TECHNOLOGY
          </div>
          {/* <p className="py-6 animate-[fade-in-right_2s_ease-in-out] text-center font-mono">
            <span className="bg-secondary rounded-md text-black px-1 ">
              {" "}
              Project Management professional
            </span>{" "}
            |{" "}
            <span className="bg-secondary rounded-md text-black px-1 ">
              {" "}
              Space and Aerospace domain{" "}
            </span>{" "}
            |{" "}
            <span className="bg-secondary rounded-md text-black px-1 inline-block ">
              Strategic, Data driven and logical thinker
            </span>{" "}
            |{" "}
            <span className="bg-secondary rounded-md text-black px-1 ">
              {" "}
              Continuous Learner
            </span>{" "}
          </p> */}
          <p className="mb-5 animate-[fade-in-left_2s_ease-in-out] text-center text-primary">
          Experienced Professor with a demonstrated history of working in the education management industry. Loves encouraging people and want to reach a greater community. Reaches out and helped students to create a blueprint for success in their lives through her care and motivation.
          </p>
          <div className="flex justify-center">
          {/* <h2 className='text-secondary font-bold' >Profile: </h2> */}
            <a className="m-2"
            href="https://www.linkedin.com/in/dr-mahalakshmi-k-00068b65/?originalSubdomain=in" target="_blank">
              <svg
                height="40"
                width="40"
                className="fill-current hover:fill-secondary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <path
                    d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
                    fill="none"
                  />
                  <path
                    d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
                    className="fill-current hover:fill-secondary"
                  />
                </g>
              </svg>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hod;
