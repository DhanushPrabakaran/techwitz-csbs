import React from 'react'
import business from "@/assets/business.png";
import Image from "next/image";
const Hod = () => {
  return (
    <div className="hero min-h-screen bg-fixed" style={{backgroundImage: 'url(https://www.esds.co.in/blog/wp-content/uploads/2019/05/Productivity-and-efficeincy.gif)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md flex flex-col justify-center items-center">
    <Image className="mask mask-squircle" height={300} width={300} src={business} alt="picture" />
      <h1 className="mb-5 text-5xl font-bold">Hod</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hod