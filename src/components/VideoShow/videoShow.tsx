import React from 'react'
import VideoFrame from './videoFrame'

function VideoShow() {
  const videoVar = [
    {
      videoUrl:'https://fast.wistia.net/embed/iframe/xrx20qiu5g',
      name:'Elon Musk',
      userid:'@kellanpr',
      views:'530+ views'
    },
    {
      videoUrl:'https://fast.wistia.net/embed/iframe/svb74c2s2l',
      name:'Elon Musk',
      userid:'@sarawilliams',
      views:'225+ views'
    },
    {
      videoUrl:'https://fast.wistia.net/embed/iframe/agduidbh78',
      name:'Elon Musk',
      userid:'@imangadzhi',
      views:'784+ views'
    },
    {
      videoUrl:'https://fast.wistia.net/embed/iframe/0xy466d1we',
      name:'metroboomin',
      userid:'@metroboom',
      views:'460k+ views'
    }
  ]
  return (
    
    <div className='w-full px-8 py-10 grid lg:grid-cols-4 grid-cols-2 gap-20 place-items-center '>
      {videoVar.map((video, index)=>(
      <VideoFrame videoUrl={video.videoUrl} name={video.name} userid={video.userid} views={video.views} key={index} />
      ))}
    </div>
  )
}

export default VideoShow
