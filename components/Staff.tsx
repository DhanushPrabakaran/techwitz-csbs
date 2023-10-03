import React from "react";
import priyadharishini from "@/events/Priyadharishini_mam.jpg";
import sudarvili from "@/events/sudarvili_mam.jpeg";
import pavitra from "@/events/pavitra_mam.jpeg";
import mohanapriya from "@/events/mohanapriya_mam.jpg";
import Image from "next/image";

const Staff = () => {
  return (
    <div className="hero group min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="w-full">
          <h1 className="text-5xl font-bold m-2 animate-[fade-in_2s_ease-in-out] text-secondary uppercase">Staff</h1>
          <div className="flex justify-center flex-wrap w-full m-2">
            
            <Image
              className="mask m-2 mask-squircle animate-[fade-in_2s_ease-in-out]"
              height={200}
              width={200}
              src={priyadharishini}
              alt="picture"
            />
            <Image
              className="mask m-2 mask-squircle animate-[fade-in_2s_ease-in-out]"
              height={200}
              width={200}
              src={mohanapriya}
              alt="picture"
            />
            <Image
              className="mask m-2 mask-squircle animate-[fade-in_2s_ease-in-out]"
              height={200}
              width={200}
              src={sudarvili}
              alt="picture"
            />
            <Image
              className="mask m-2 mask-squircle animate-[fade-in_2s_ease-in-out]"
              height={200}
              width={200}
              src={pavitra}
              alt="picture"
            />
          </div>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Staff;
