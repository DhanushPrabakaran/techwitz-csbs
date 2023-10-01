import React from "react";
import Image from "next/image";
import pic_1 from "@/events/pic_1.png";
import pic_2 from "@/events/pic_2.png";
import pic_3 from "@/events/pic_3.png";
import pic_4 from "@/events/pic_4.png";
// import pic_5 from '@/events/pic_5.png'
import pic_6 from "@/events/pic_6.png";
import pic_7 from "@/events/pic_7.png";
import pic_8 from "@/events/pic_8.png";
import pic_9 from "@/events/pic_9.png";
import pic_10 from "@/events/pic_10.png";
import pic_11 from "@/events/pic_11.png";
import pic_12 from "@/events/pic_12.png";
import pic_13 from "@/events/pic_13.png";
import pic_14 from "@/events/pic_14.png";
import pic_15 from "@/events/pic_15.png";
import pic_16 from "@/events/pic_16.png";
import pic_17 from "@/events/pic_17.png";

const photos = [
    { src: {pic_1}, width: 800, height: 600 },
    { src: {pic_10}, width: 1600, height: 900 },
];
const Gallery = () => {
  return (
    <div className=" relative h-screen w-screen overflow-scroll overflow-x-hidden">
         
     <h1 className=" text-secondary absolute w-full text-center text-5xl font-bold  justify-start content-center	 ">Gallery</h1>
    
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
    <div className="grid gap-2">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={pic_1} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={pic_8} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={pic_9} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={pic_4} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={pic_6} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={pic_7} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={pic_8} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={pic_2} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={pic_10} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={pic_11} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={pic_12} alt=""/>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src={pic_13} alt=""/>
        </div>
    </div>
</div>


    </div>
  );
};

export default Gallery;
//     <div
//     classNameName='h-screen w-screen'>
//          <h1
//         classNameName='z-10 absolute left-[39%]  content-center text-center text-5xl font-bold justify-center'>Gallery</h1>
//         {/* <div classNameName="hero-overlay bg-opacity-0"></div> */}
//     <div classNameName="carousel carousel-end  ">

//   <div classNameName="carousel-item">

//     <Image
//     src={pic_1} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_2} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_3} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_4} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_4} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_6} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_7} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_8} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_9} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_10} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_11} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_12} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_13} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
//   <div classNameName="carousel-item">

//     <Image
//     src={pic_14} alt="Drink"
//     classNameName=' w-fit object-center image-full'
//     />
//   </div>
// </div>
// </div>
