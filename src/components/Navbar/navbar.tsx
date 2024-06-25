"use client"
import React, { useState } from 'react'

import navImg from '@/app/assets/logo.png'

import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { CtaBtn } from './CtaBtn';

import { RiMenu5Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { PiFilmSlateFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";

import { motion, Variants } from 'framer-motion';




function Navbar() {
  const navItems = [{name:"Portfolio",link: "/portfolio"},{name:"Testimonials",link: "/#testimonials"}, {name:"Contact",link: "/#contact"} ];
  
  const pathname = usePathname();

  const fadeinAnimation: Variants = {
    hidden: {
      opacity: 1,
      y: -10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      }
    },
  }

  return (
    <div className='w-[80%] h-[4rem] relative shadow-2xl flex justify-between items-center px-5 '>
      {/* Logo */}
      <Link href={'/'} className='md:w-[100px] w-[80px] md:h-auto '>
        <Image src={navImg} alt='nav-image' className=' w-full h-full ' />
      </Link>

      {/* Links */}
      <div className=' hidden sm:flex justify-between items-center cursor-pointer '>
        <ul className='flex justify-around items-center w-full gap-8'>
          {navItems.map(({name, link}) => (
            <li className='cursor-pointer hover:text-cyan-400 ' key={name}>
              <Link key={name} href={link}
              style={{ color: pathname === link ? "rgb(34 211 238)" : "" }}
              >{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Cta buttons */}
      <div className='inline-block'>
        <CtaBtn />
      </div>

      {/* Mobile Nav */}
      <div className='top-[550px] left-1/2 -translate-x-1/2 fixed block sm:hidden  '>
        <div className=' w-[80vw] h-[60px] backdrop-blur-lg  rounded-full z-50 border border-gray-300 p-5 '
          style={{ background: "linear-gradient(106deg, #060617 4.74%, #000 46.83%)" }} >
          <ul className='flex justify-around items-center text-center h-full w-full gap-8'>
              <li className='cursor-pointer hover:text-cyan-400 '>
                <Link href={navItems[1].link}>
                <FaHeart  className='w-5 h-5' color='red' />
                </Link>
              </li>
              <li className='cursor-pointer hover:text-cyan-400 '>
                <Link href={navItems[0].link}>
                <PiFilmSlateFill  className='w-10 h-10' color='blue' />
                </Link>
              </li>
              <li className='cursor-pointer hover:text-cyan-400 '>
                <Link href={navItems[2].link}>
                <AiFillMessage className='w-5 h-5'  />
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar

