import React from 'react'
import { FaPlay } from "react-icons/fa"
import { CtaBtn } from '../Navbar/CtaBtn'
function VideoComp() {
const videoUrl = "https://fast.wistia.net/embed/iframe/kgzkpmxoaz";
  return (
    <div className=' w-full md:w-[80%] h-[400px] sm:h-[600px] rounded-3xl shadow-4xl  flex-col justify-center items-center  z-50 '>

<iframe src={videoUrl} title="unsplash video" allowFullScreen width="100%" height="100%" allow="autoplay; fullscreen" allowTransparency name="wistia_embed" className='rounded-3xl w-full ' ></iframe>
<div className=" block sm:hidden">
        <CtaBtn/>
      </div>
      {/* <div className=' w-[20%] h-[20%] bg-blue-900 rounded-full grid place-items-center '><FaPlay className=' w-[30px] h-[30px] ' /></div> */}
    </div>
  )
}

export default VideoComp
