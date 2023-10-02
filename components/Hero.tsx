"use client";
import React from "react";
// Initialization for ES Users
import {
  Animate,
  initTE,
} from "tw-elements";

initTE({ Animate });
import YouTubePlayer from "../components/youtube";
const Hero = () => {
  return (
    <div className="  hero min-h-screen bg-fixed" style={{backgroundImage: 'url(https://www.esds.co.in/blog/wp-content/uploads/2019/05/Productivity-and-efficeincy.gif)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold animate-[fade-in-down_2s_ease-in-out]">Computer Science and <span className=" text-secondary">Business Systems</span></h1>
      <p className="mb-5 animate-[fade-in-left_2s_ease-in-out]  ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="flex justify-center">
        <a
        className="m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-current hover:fill-secondary"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a
        className="m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-current hover:fill-secondary"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a
        className="m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-current hover:fill-secondary"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
      <div
      className="rounded-md w-5">
      {/* <YouTubePlayer/>   */}
      </div>
      
    </div>
  </div>
</div>
  );
};

export default Hero;
// <div>
//   <h1 className="text-3xl font-bold text-center block">Computer Scinece and<span className=' text-neutral'> business system</span></h1>
//   {/* <p className="text-lg text-neutral font-extrabold">Organized By</p>  */}
//   <h3 className=' text-xl font-bold'>Slogan</h3>
//   <p className="mb-5"> as a department, is likely dedicated to providing education and training in computer science and its application in business contexts.</p>
//   <button className="btn btn-primary">Get Started</button>
// </div>
