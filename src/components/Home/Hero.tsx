import React from 'react';
import {HeroImage} from "../../../public";
import Image from "next/image";
import Link from "next/link";
import TitleBackground from "@/components/TitleBackground";
import { IoArrowForward } from "react-icons/io5";



const Hero = () => {
  return (
    <div className="flex h-[50rem] bg-black text-white/80 relative">
      <Image src={HeroImage} className="absolute z-0 flex-1 h-[50rem] w-fit object-cover max-lg:-left-32" style={{transform: "rotateY(3.142rad)"}} alt={'hero'} />
      <div className="flex flex-1 flex-col gap-y-6 justify-center z-10 items-start absolute bottom-[50%] right-[22rem] max-lg:right-[6rem] max-md:static max-md:items-center max-md:text-center">
        <div className="relative w-fit h-fit text-black font-semibold">
          <TitleBackground color={'#FFFFFF'} classes={"scale-110"} />
          <p className="absolute w-fit z-10 top-[20%] right-0 left-0 ml-auto mr-auto">FIND YOUR ENERGY</p>
        </div>
        <p className="text-6xl"><span className="font-bold text-white">MAKE YOUR BODY</span><br /> FIT & PERFECT</p>
        <Link href={'/classes'}>
          <div
            className="group/button flex relative z-10 font-bold items-center bg-white text-black px-7 py-3 gap-x-1 mt-8">
            OUR CLASSES
            <IoArrowForward color={'red'} size={18}/>
            <div
              className="absolute z-[9] border-[#3f3f3f] border-[1px] w-full h-full left-[10%] -top-[30%]  group-hover/button:left-0 group-hover/button:top-0 transition-all duration-500"/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;