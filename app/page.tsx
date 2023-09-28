import React from 'react'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Event from '@/components/Event'
import Chefguest from '@/components/Chefguest'
import Hod from '@/components/Hod'
import Coordinator from '@/components/Coordinator'
import Staff from '@/components/Staff'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div
    className=' w-screen flex flex-col flex-wrap'>
      <Header/>
      <Hero />
      <Event/>
      <Chefguest/>
      <Hod/>
      <Coordinator/>
      <Staff/>
      <Footer/>
    </div>
  )
}

export default page