import Navbar from '@/components/Navbar/navbar'
import React from 'react'

const layout =({ children }:{ children:React.ReactNode })=>{
  return (
    <main className={`"min-h-screen relative "`}>
        <div className="w-full p-2 flex justify-center items-center z-10 border-b border-[#a1a2a2]  ">
            <Navbar/>
        </div>
        {children}
    </main>
  )
}

export default layout
