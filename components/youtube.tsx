'use client'
import React from 'react'
import ReactPlayer from 'react-player'
  
export default function VideoPlayer(){
  return (
    <div
    className='w-10'>
    
      <ReactPlayer
       url='https://www.youtube.com/watch?v=wWgIAphfn2U'
       
       />
    </div>
  )
}