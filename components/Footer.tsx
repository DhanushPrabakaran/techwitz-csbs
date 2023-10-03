import React from "react";
import Image from "next/image";
import Logo from '@/assets/Logo.png'
const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
       <Image 
       className=" h-8 w-8"
       src={Logo}
      alt="ogo" />
        <p>&copy;Copyright 2023-<a 
         className="btn-link text-sm "
          href="https://www.linkedin.com/in/dhanushprabakar/">@Dhanushprabakaran</a></p>
         
      </aside>
      
    </footer>
  );
};

export default Footer;
