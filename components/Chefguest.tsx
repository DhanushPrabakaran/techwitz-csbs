import React from 'react'
import business from '@/assets/business.png'
import Image from 'next/image'
import chefguest from '@/events/chefguest.jpg'
// Image
const Chefguest = () => {
  return (
    <div className="hero group min-w-screen  min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row justify-center">
  <Image 
  className="mask mask-squircle animate-[fade-in_2s_ease-in-out]" 
  height={300} 
  width={300} 
  src={chefguest}
  alt="picture" />
    <div
    className='flex items-center flex-col'>
      <h1 className="text-5xl font-bold animate-[fade-in-down_2s_ease-in-out] text-secondary">{"<"} Chief Guest {">"}</h1>
      <h2 className=" font-bold m-2 text-3xl text-primary animate-[fade-in-left_2s_ease-in-out] ">Mr. Balaji S</h2>
                <h2 className=" font-bold text-2xl m-2  text-secondary animate-[fade-in-left_2s_ease-in-out] ">Deputy General Manager - Project & Planning</h2>
                <div className="animate-[fade-in-left_2s_ease-in-out] text-xl m-2 font-bold uppercase ">Lakshmi Machine Works Ltd</div>
      <p className="py-6 animate-[fade-in-right_2s_ease-in-out] text-center font-mono">
      <span className='bg-secondary rounded-md text-black px-1 '> Project Management professional</span> | <span className='bg-secondary rounded-md text-black px-1 '> Space and Aerospace domain </span> | <span className='bg-secondary rounded-md text-black px-1 inline-block '>Strategic, Data driven and logical thinker</span> | <span className='bg-secondary rounded-md text-black px-1 '> Continuous Learner</span> </p>
      <div className="flex text-center items-center justify-center">
           <h2 className='text-secondary font-bold' >Profile: </h2>
            <a className="m-2"
            href='https://www.linkedin.com/in/balaji-s-854a716/?originalSubdomain=in' target='_blank'>
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
  )
}

export default Chefguest