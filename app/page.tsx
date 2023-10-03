import React from 'react'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Event from '@/components/Event'
import Chefguest from '@/components/Chefguest'
import Hod from '@/components/Hod'
import Coordinator from '@/components/Coordinator'
import Staff from '@/components/Staff'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
const page = () => {
  return (
    <div
    className=' overflow-hidden flex flex-col flex-wrap font-mono'>
      <Header/>
      <Hero />
      <Event/>
      <Chefguest/>
      <Hod/>
      <Coordinator/>
      <Staff/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default page