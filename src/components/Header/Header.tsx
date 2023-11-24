import React from "react";
import Link from "next/link";
import Image from "next/image";
import MainLogo from '@/../public/main-logo.svg'
import HeaderButton from "@/components/Header/HeaderButton";
import {CgProfile} from "react-icons/cg";


const Header = () => {
  const links = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Gallery', link: '/gallery'},
    {name: 'Schedule', link: '/schedule'},
    {name: 'Blog', link: '/blog'},
    {name: 'Pricing', link: '/pricing'},
    {name: 'Classes', link: '/classes'},
    {name: 'Contact', link: '/contact'},
  ]

  return (
    <nav className="flex bg-black h-[80px] justify-between items-center p-12 text-white/80 font-semibold text-[17px]">
      <div className="flex-1">
        <Image src={MainLogo} alt={'logo'}/>
      </div>
      <div className="flex-1 flex items-center justify-center gap-x-4">
        {links.map(link => (
          <Link key={link.name} href={link.link}><p>{link.name}</p></Link>
        ))}
      </div>
      <div className="flex-1 flex items-center justify-end gap-x-4">
        <Link href={'login'}>
          <CgProfile size={30}/>
        </Link>
        <div className="flex justify-start items-center p-[5px] w-fit border-[#5b5b5b] border-2 rounded-md">
          <HeaderButton />
          <p className="mx-3 font-bold text-[14px]">JOIN CLASS NOW</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;