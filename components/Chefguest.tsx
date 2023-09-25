import React from 'react'
import business from '@/assets/business.png'
import Image from 'next/image'
// Image
const Chefguest = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row justify-center">
  <Image 
  className="mask mask-squircle" 
  height={450} 
  width={450} 
  src={business} 
  alt="picture" />

    {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
    <div
    className='flex items-center flex-col'>
      <h1 className="text-5xl font-bold">Chefguest</h1>
      <p className="py-6 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
  </div>
</div>
  )
}

export default Chefguest