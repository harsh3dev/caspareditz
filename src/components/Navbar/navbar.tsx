"use client"
import React, { useState } from 'react'
import navImg from '@/app/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link';
import { CtaBtn } from './CtaBtn';
import { RiMenu5Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { motion, Variants } from 'framer-motion';

function Navbar() {
  const navItems = ["Portfolio", "Testimonials", "Contact"];
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
    <div className='w-[80%] h-[4rem]  shadow-2xl flex justify-between items-center px-5 '>
      {/* Logo */}
      <div className='md:w-[100px] w-[80px] md:h-auto '>
        <Image src={navImg} alt='nav-image' className=' w-full h-full ' />
      </div>

      {/* Links */}
      <div className=' hidden sm:flex justify-between items-center cursor-pointer '>
        <ul className='flex justify-around items-center w-full gap-8'>
          {navItems.map((item) => (
            <li className='cursor-pointer hover:text-cyan-400 ' key={item}>
              <Link key={item} href="">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Cta buttons */}
      <div className='hidden sm:inline-block'>
        <CtaBtn />
      </div>

      {/* Mobile Nav */}
      <div className=' block sm:hidden '>
        <div onClick={handleMobileMenu} className=''>
          {!open && <RiMenu5Line size={25} />}
          {open && <IoMdClose size={25} />}
        </div>
        {open &&
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeinAnimation}
            className='absolute w-screen h-[70px] rounded-b-xl backdrop-blur-md top-[82px] left-0 z-50 '
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
      </div>


    </div>
  )
}

export default Navbar

