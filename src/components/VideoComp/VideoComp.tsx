import React from 'react'
import { FaPlay } from "react-icons/fa";
function VideoComp() {
  
  return (
    <div className='w-[80%] h-[600px] rounded-3xl shadow-4xl border-2 border-white flex justify-center items-center   '>
      <div className=' w-[20%] h-[20%] bg-blue-900 rounded-full grid place-items-center '><FaPlay className=' w-[30px] h-[30px] ' /></div>
    </div>
  )
}

export default VideoComp
