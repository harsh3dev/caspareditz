"use client"
import React, { useState } from 'react'
import navImg from '@/app/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link';
import { CtaBtn } from './CtaBtn';
import { RiMenu5Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { motion, Variants } from 'framer-motion';
import { AiFillMessage } from "react-icons/ai";
import { PiFilmSlateFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";




function Navbar() {
  const navItems = [{name:"Portfolio",link: "/Portfolio"},{name:"Testimonials",link: "/#testimonials"}, {name:"Contact",link: "/#contact"} ];
  // const navItems = ["Portfolio", "Testimonials", "Contact"];
  const [open, setOpen] = useState(false);
  const handleMobileMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOpen((prev) => (!prev));
    console.log(open);

  }
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
      <div className='md:w-[100px] w-[80px] md:h-auto '>
        <Image src={navImg} alt='nav-image' className=' w-full h-full ' />
      </div>

      {/* Links */}
      <div className=' hidden sm:flex justify-between items-center cursor-pointer '>
        <ul className='flex justify-around items-center w-full gap-8'>
          {navItems.map(({name, link}) => (
            <li className='cursor-pointer hover:text-cyan-400 ' key={name}>
              <Link key={name} href={link}>{name}</Link>
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
          style={{ background: "linear-gradient(106deg, #060617 4.74%, #000 46.83%);" }} >
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

      {/* TOP VERSION */}
      {/* <div className=' block sm:hidden '>
        <div onClick={handleMobileMenu} className=''>
          {!open && <RiMenu5Line size={25} />}
          {open && <IoMdClose size={25} />}
        </div>
        {open &&
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeinAnimation}
            className='absolute w-screen h-[70px] rounded-b-xl backdrop-blur-sm top-[82px] left-0 z-50 border border-t-0 border-white '
            style={{background: "linear-gradient(106deg, #060617 4.74%, #000 46.83%);"}}
            >
            <ul className='flex justify-around items-center text-center h-full w-full gap-8'>
              {navItems.map((item) => (
                <li className='cursor-pointer hover:text-cyan-400 ' key={item}>
                  <Link key={item} href="">{item}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        }
      </div> */}


    </div>
  )
}

export default Navbar

