import React from 'react'
import background from '@/assets/background.jpg'
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-fixed" style={{backgroundImage: 'url(https://www.esds.co.in/blog/wp-content/uploads/2019/05/Productivity-and-efficeincy.gif)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="text-3xl font-bold text-center block">Computer Scinece and<span className=' text-neutral'> business system</span></h1>
      {/* <p className="text-lg text-neutral font-extrabold">Organized By</p>  */}
      <h3 className=' text-xl font-bold'>Slogan</h3>
      <p className="mb-5"> as a department, is likely dedicated to providing education and training in computer science and its application in business contexts.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    <div
    className=' border-4 rounded-md'>
    <iframe width="" height="" src="https://www.youtube.com/embed/DdqkYzyTxrE" title="KIT-COIMBATORE TEAM- |TECHWITZ| DEPARTMENT OF COMPUTER SCIENCE AND BUSINESS SYSTEMS INAUGURAL LAUNCH" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
    
  </div>
</div>
  )
}

export default Hero