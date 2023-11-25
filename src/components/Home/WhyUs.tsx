import TitleBackground from "@/components/TitleBackground";
import React from "react";
import Image from "next/image";
import {Bag, Equipment, Fitness, MainImage, Water} from "../../../public/whyUs";
import {IoArrowForward} from "react-icons/io5";
import Link from "next/link";


const WhyUs = () => {
  return (
    <div className="bg-[#171717] text-white/70 flex justify-center items-center pt-36 -mt-24 py-12 max-[950px]:flex-col">
      <div className="flex relative justify-center items-center flex-1">
        <div className="relative w-fit h-fit m-12">
          <Image className="relative" src={MainImage} alt={'main image'}/>
          <div className="absolute w-[6px] h-[200px] bg-[#ff003c] -left-6 bottom-0"/>
          <div className="absolute w-[6px] h-[60%] bg-[#ff003c] rotate-[174deg] -right-4 top-9"/>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-y-5 max-[950px]:items-center max-[950px]:text-center max-[950px]:p-6">
        <div className="relative w-fit h-fit text-white text-[14px] font-semibold">
          <TitleBackground color={'#ff003c'} classes={"scale-110"}/>
          <p className="absolute w-fit z-10 top-[20%] right-0 left-0 ml-auto mr-auto">WHY CHOOSE US</p>
        </div>
        <p className="text-white font-bold text-4xl max-w-[500px]">We Can Give A Shape Of Your Body Here!</p>
        <p className="max-w-[500px]">At <span className="font-bold">Gymate</span>, we are dedicated to helping you
          achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a
          personalized fitness and nutrition plan that helps you reach your specific goals.
        </p>
        <div className="grid grid-cols-2 gap-7 max-w-fit">
          <div className="flex items-center gap-x-4">
            <Image className="bg-[#2b2b2b] hover:bg-[#ff0336] rounded-full ease-in duration-200 transition-all w-[4rem] p-3" src={Fitness} alt={'fitness'} />
            <p className="font-bold text-white text-[18px] max-[500px]:text-[16px]">Free Fitness Training</p>
          </div>
          <div className="flex items-center gap-x-4">
            <Image className="bg-[#2b2b2b] hover:bg-[#ff0336] rounded-full ease-in duration-200 transition-all w-[4rem] p-3" src={Equipment} alt={'fitness'} />
            <p className="font-bold text-white text-[18px] max-[500px]:text-[16px]">Modern Gym Equipments</p>
          </div>
          <div className="flex items-center gap-x-4">
            <Image className="bg-[#2b2b2b] hover:bg-[#ff0336] rounded-full ease-in duration-200 transition-all w-[4rem] p-3" src={Bag} alt={'fitness'} />
            <p className="font-bold text-white text-[18px] max-[500px]:text-[16px]">Gym Bag Equipments</p>
          </div>
          <div className="flex items-center gap-x-4">
            <Image className="bg-[#2b2b2b] hover:bg-[#ff0336] rounded-full ease-in duration-200 transition-all w-[4rem] p-3" src={Water} alt={'fitness'} />
            <p className="font-bold text-white text-[18px] max-[500px]:text-[16px]">Fresh Bottle Watterg</p>
          </div>
        </div>
        <Link href={'/contact'} className="w-fit mt-6">
          <div className="group/button flex relative font-bold items-center bg-white text-black px-7 py-3 gap-x-1">
            OUR CLASSES
            <IoArrowForward color={'red'} size={18}/>
            <div
              className="absolute z-10 border-white border-[1px] w-full h-full left-[10%] -top-[30%] group-hover/button:left-0 group-hover/button:top-0 transition-all duration-500"/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WhyUs;