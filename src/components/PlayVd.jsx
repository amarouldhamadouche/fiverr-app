import React from 'react'
import '../components/PlatVd.css'
import {BsPlayCircle } from "react-icons/bs"

function PlayVd() {
  return (
    <div className=' mt-72 mb-36 flex flex-col lg:flex-row justify-center items-center '>
      <h1 className=' opacity-25 mb-2 lg:-rotate-90 font-bold text-5xl lg:absolute Txt '>Play Video</h1>
    <iframe  className=" lg:w-1/2 w-full px-4  mx-auto aspect-video " src="https://www.youtube.com/embed/gvim3YjvRp8"></iframe>
    </div>
  )
}

export default PlayVd
