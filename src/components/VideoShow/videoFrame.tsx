import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";

interface VideoFrameProps {
    videoUrl: string,
    name: string,
    userid: string,
    views: string,
}

const VideoFrame: React.FC<VideoFrameProps> = ({ videoUrl, name, userid, views }) => {
    // const videoUrl = "https://fast.wistia.net/embed/iframe/k52wryrpnf";
    return (
        <div className=' w-[34vw] lg:w-[20vw] aspect-[9/16] flex-col justify-between items-start px-4 pt-4 pb-2 border border-gray-50 rounded-md z-50 '>
            <iframe src={videoUrl} title="showcase video" allowFullScreen width="100%" height="95%" allow="autoplay; fullscreen" name="wistia_embed" className='rounded-md w-full ' ></iframe>

            <div className='flex sm:flex-row flex-col justify-start items-start w-full md:gap-3 mt-2 '>
                <h1 className='text-xs md:text-base md:font-bold md:leading-none'>{userid}</h1>
                <span className=' text-xs md:text-base text-right sm:w-1/2'  > {views} </span>
            </div>
        </div>
    )
}

export default VideoFrame
