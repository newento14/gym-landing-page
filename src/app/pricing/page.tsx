import React from 'react';
import Pricing from "@/components/Home/Pricing";
import TitleBackground from "@/components/TitleBackground";
import Image from "next/image";
import {Image1, Image2, Image3} from "../../../public/pricing";
import Link from "next/link";
import {IoArrowForward} from "react-icons/io5";

const Page = () => {
  return (
    <main>
      <div
        className="flex justify-center items-end p-2 bg-[url('../../public/about/banner.jpg')] h-[300px] object-cover bg-cover bg-no-repeat bg-right">
        <p className="text-4xl font-bold text-white">Pricing</p>
      </div>
      <div className="flex flex-col items-center gap-y-4 text-center mt-12">
        <div className="relative w-fit h-fit text-white text-[14px] font-semibold">
          <TitleBackground color={'#ff003c'} classes={"scale-110"}/>
          <p className="absolute w-fit z-10 top-[20%] right-0 left-0 ml-auto mr-auto">PRICING CHART</p>
        </div>
        <p className="text-3xl font-bold">Exclusive Pricing Plan</p>
        <p className="max-w-[400px] text-black/70 font-medium">Gymate an unknown printer took a galley of type and
          scrambled make a type specimen book.</p>
        <div className="flex flex-wrap gap-7 justify-center">
          <div className="flex flex-col">
            <div className="relative group/item">
              <Image className="grayscale group-hover/item:grayscale-0 transition-all duration-300" src={Image1}
                     alt={'background'}/>
              <div
                className="absolute flex justify-center items-center bottom-0 right-0 left-0 mx-auto w-[60%] h-[18%] bg-white">
                <p
                  className="group-hover/item:text-[#ff003c] transition-all duration-300 text-[20px] font-semibold">Beginners</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-3 shadow-2xl">
              <div className="flex items-center gap-x-1 text-xl">
                <p className="align-bottom text-3xl">$</p>
                <div className="flex items-end gap-x-1">
                  <p className="text-4xl font-bold">39</p>
                  <p>p/m</p>
                </div>
              </div>
              <p>Free Hand</p>
              <p>Gym Fitness</p>
              <p>Weight Loss</p>
              <p>Personal Trainer</p>
              <p>Cycling</p>
              <Link href={'/contact'} className="my-6">
                <div
                  className="group/button flex relative font-bold items-center bg-[#ff003c] text-white px-7 py-3 gap-x-1 w-fit h-fit">
                  PURCHASE NOW
                  <IoArrowForward size={18}/>
                  <div
                    className="absolute z-10 border-[#ff003c] border-[1px] w-full h-full left-[10%] -top-[30%] group-hover/button:left-0 group-hover/button:top-0 transition-all duration-500"/>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative group/item">
              <Image className="grayscale group-hover/item:grayscale-0 transition-all duration-300" src={Image2}
                     alt={'background'}/>
              <div
                className="absolute flex justify-center items-center bottom-0 right-0 left-0 mx-auto w-[60%] h-[18%] bg-white">
                <p
                  className="group-hover/item:text-[#ff003c] transition-all duration-300 text-[20px] font-semibold">Intermediate</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-3 shadow-2xl">
              <div className="flex items-center gap-x-1 text-xl">
                <p className="align-bottom text-3xl">$</p>
                <div className="flex items-end gap-x-1">
                  <p className="text-4xl font-bold">69</p>
                  <p>p/m</p>
                </div>
              </div>
              <p>Free Hand</p>
              <p>Gym Fitness</p>
              <p>Weight Loss</p>
              <p>Personal Trainer</p>
              <p>Cycling</p>
              <Link href={'/contact'} className="my-6">
                <div
                  className="group/button flex relative font-bold items-center bg-[#ff003c] text-white px-7 py-3 gap-x-1 w-fit h-fit">
                  PURCHASE NOW
                  <IoArrowForward size={18}/>
                  <div
                    className="absolute z-10 border-[#ff003c] border-[1px] w-full h-full left-[10%] -top-[30%] group-hover/button:left-0 group-hover/button:top-0 transition-all duration-500"/>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative group/item">
              <Image className="grayscale group-hover/item:grayscale-0 transition-all duration-300" src={Image3}
                     alt={'background'}/>
              <div
                className="absolute flex justify-center items-center bottom-0 right-0 left-0 mx-auto w-[60%] h-[18%] bg-white">
                <p
                  className="group-hover/item:text-[#ff003c] transition-all duration-300 text-[20px] font-semibold">Professional</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-3 shadow-2xl">
              <div className="flex items-center gap-x-1 text-xl">
                <p className="align-bottom text-3xl">$</p>
                <div className="flex items-end gap-x-1">
                  <p className="text-4xl font-bold">99</p>
                  <p>p/m</p>
                </div>
              </div>
              <p>Free Hand</p>
              <p>Gym Fitness</p>
              <p>Weight Loss</p>
              <p>Personal Trainer</p>
              <p>Cycling</p>
              <Link href={'/contact'} className='my-6'>
                <div
                  className="group/button flex relative font-bold items-center bg-[#ff003c] text-white px-7 py-3 gap-x-1 w-fit h-fit">
                  PURCHASE NOW
                  <IoArrowForward size={18}/>
                  <div
                    className="absolute z-10 border-[#ff003c] border-[1px] w-full h-full left-[10%] -top-[30%] group-hover/button:left-0 group-hover/button:top-0 transition-all duration-500"/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;