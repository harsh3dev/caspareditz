import React from 'react'
import { FaPlay } from "react-icons/fa"
function VideoComp() {

  return (
    <div className=' w-full md:w-[80%] h-[400px] sm:h-[600px] rounded-3xl shadow-4xl  flex justify-center items-center  z-50 '>

<iframe src="https://fast.wistia.net/embed/iframe/upnrberqvn" title="unsplash video" allowFullScreen width="100%" height="100%" allow="autoplay; fullscreen" allowTransparency name="wistia_embed" className='rounded-3xl w-full ' ></iframe>

      {/* <div className=' w-[20%] h-[20%] bg-blue-900 rounded-full grid place-items-center '><FaPlay className=' w-[30px] h-[30px] ' /></div> */}
    </div>
  )
}

export default VideoComp
