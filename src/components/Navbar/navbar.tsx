import React from 'react'
import navImg from '@/app/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link';
import { CtaBtn } from './CtaBtn';

function Navbar() {
    const navItems =["Portfolio", "Testimonials", "Contact"];
  return (
    <div className='w-[80%] h-[4rem]  shadow-2xl flex justify-between items-center px-5 '>
      {/* Logo */}
      <div className='w-[100px] h-auto '>
        <Image src={navImg} alt='nav-image' className=' w-full h-full ' />
      </div>

      {/* Links */}
      <div className='flex justify-between items-center cursor-pointer '>
            <ul className='flex justify-around items-center w-full gap-8'>
                {navItems.map((item)=>(
                    <li className='cursor-pointer hover:text-cyan-400 ' key={item}>
                      <Link key={item} href="">{item}</Link>
                    </li>
                ))}
            </ul>
      </div>
      
      {/* Cta buttons */}

      <CtaBtn/>


    </div>
  )
}

export default Navbar

