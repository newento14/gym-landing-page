'use client'
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {CgProfile} from "react-icons/cg";
import Headroom from "react-headroom";
import {FaPlus} from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion";
import {MainLogo} from "../../public";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import {CiMenuFries} from "react-icons/ci";


const links = [
  {name: 'Home', link: '/'},
  {name: 'About', link: '/about'},
  {name: 'Schedule', link: '/schedule'},
  {name: 'Pricing', link: '/pricing'},
  {name: 'Classes', link: '/classes'},
  {name: 'Contact', link: '/contact'},
]

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Headroom className="w-[100vw] relative z-[100]">
      <nav
        className="flex bg-black h-[80px] justify-between items-center p-12 text-white/80 font-semibold text-[17px] w-[100vw]">
        <div className="flex-1">
          <Link href={'/'} className="w-fit">
            <Image className="w-fit" src={MainLogo} alt={'logo'}/>
          </Link>
        </div>
        <Navbar/>
        <div className="flex-1 flex items-center justify-end gap-x-4">
          <Link href={'/login'}>
            <div className="flex justify-start items-center hover:text-red-600 transition-all duration-500">
              <CgProfile size={30}/>
            </div>
          </Link>
          <Link href={'/contact'} className="max-[1100px]:hidden">
            <div className="flex justify-start items-center p-[5px] w-fit border-[#5b5b5b] border-2 rounded-md">
              <motion.div
                whileHover={{rotate: 180}}
                transition={{duration: 0.4, ease: 'easeIn'}}
                className="flex justify-center items-center w-[35px] h-[35px] bg-[#ff003c] rounded-md">
                <FaPlus size={18} color={'white'}/>
              </motion.div>
              <p className="mx-3 font-bold text-[14px]">JOIN CLASS NOW</p>
            </div>
          </Link>
          <div className="h-full w-fit justify-center items-center max-[1100px]:flex hidden">
            <button onClick={() => setVisible(!visible)}><CiMenuFries size={30} color={'white'}/></button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {visible && <NavbarMobile setVisible={setVisible} value={true}/>}
      </AnimatePresence>
    </Headroom>
  );
};

export default Header;