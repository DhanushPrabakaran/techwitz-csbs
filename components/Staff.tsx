import React from 'react'
import business from "@/assets/business.png";
import Image from "next/image";
const Staff = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="w-full">
    <h1 className="text-5xl font-bold m-2">Staff</h1>
      <div
      className='flex justify-center flex-wrap w-full m-2'>
      <Image className="mask mask-squircle" height={200} width={200} src={business} alt="picture" />
      <Image className="mask mask-squircle" height={200} width={200} src={business} alt="picture" />
      <Image className="mask mask-squircle" height={200} width={200} src={business} alt="picture" />
      <Image className="mask mask-squircle" height={200} width={200} src={business} alt="picture" />
      <Image className="mask mask-squircle" height={200} width={200} src={business} alt="picture" />         
      </div>
      
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
  </div>
</div>
  )
}

export default Staff