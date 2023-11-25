import React from 'react';
import TitleBackground from "@/components/TitleBackground";
import Image from "next/image";
import {CtaBG, CyclingBG, KarateBG, MeditationBG, MmaBG, PowerBG, WorkoutBG} from "../../../public/classes";
import {IoArrowForward} from "react-icons/io5";
import Link from "next/link";


const Classes = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 mt-8 justify-center w-full items-center max-[950px]:px-4">
        <div className="relative w-fit h-fit text-white text-[14px] font-semibold">
          <TitleBackground color={'#ff003c'} classes={"scale-110"}/>
          <p className="absolute w-fit z-10 top-[20%] right-0 left-0 ml-auto mr-auto">OUR FEATURED CLASS</p>
        </div>
        <p className="font-bold text-3xl text-center">We Are Offering Best Flexible Classes</p>
        <div
          className="grid grid-cols-4 grid-rows-2 gap-4 max-[950px]:flex max-[950px]:flex-col max-[950px]:items-center">
          <div
            className="col-start-1 col-end-3 bg-fuchsia-500 max-w-[616px] w-full h-[300px] relative group/item cursor-pointer max-[950px]:max-w-[700px]">
            <div className="h-full overflow-hidden">
              <Image
                className="relative z-10 group-hover/item:scale-125 transition-all ease-in duration-[.4s] h-full object-cover grayscale group-hover/item:grayscale-0"
                src={CyclingBG} alt={'cycling background'}/>
            </div>
            <div
              className="z-[11] absolute bg-[hsla(0,0%,100%,.3)] w-[120px] h-[60px] rounded-full rotate-[30deg] top-[30%] -left-12 transition-all duration-200 group-hover/item:bg-white"/>
            <div
              className="absolute z-50 top-[39%] left-[20px] bg-[url('../../public/classes/cycling.png')] w-[35px] h-[35px] bg-cover transition-all duration-200 group-hover/item:bg-[url('../../public/classes/cyclingRed.png')]"/>
            <div className="absolute z-50 bottom-[5%] left-[5%] text-white/80">
              <p className="text-2xl font-bold mb-2">Cycling</p>
              <div className="bg-[#ff003c] text-white px-2 py-[1px] font-medium text-[15px]">
                <p>Wednesday: 9:00am-10:00am</p>
              </div>
            </div>
          </div>
          <div className="max-w-[300px] w-full h-[300px] relative group/item cursor-pointer max-[950px]:max-w-[700px]">
            <div className="h-full overflow-hidden">
              <Image
                className="relative z-[8] group-hover/item:scale-125 transition-all ease-in duration-[.4s] h-full object-cover grayscale group-hover/item:grayscale-0"
                src={KarateBG} alt={'karate background'}/>
            </div>
            <div
              className="z-[9] absolute bg-[hsla(0,0%,100%,.3)] w-[120px] h-[60px] rounded-full rotate-[30deg] top-[30%] -left-12 transition-all duration-200 group-hover/item:bg-white"/>
            <div
              className="absolute z-50 top-[39%] left-[20px] bg-[url('../../public/classes/karate.png')] w-[35px] h-[35px] bg-cover transition-all duration-200 group-hover/item:bg-[url('../../public/classes/karateRed.png')]"/>
            <div className="absolute z-50 bottom-[5%] left-[5%] text-white/80">
              <p className="text-2xl font-bold mb-2">Karate</p>
              <div className="bg-[#ff003c] text-white px-2 py-[1px] font-medium text-[15px]">
                <p>Friday: 10:00am-11:00am</p>
              </div>
            </div>
          </div>
          <div className="max-w-[300px] w-full h-[300px] relative group/item cursor-pointer max-[950px]:max-w-[700px]">
            <div className="h-full overflow-hidden">
              <Image
                className="relative z-[6] group-hover/item:scale-125 transition-all ease-in duration-[.4s] h-full object-cover grayscale group-hover/item:grayscale-0"
                src={PowerBG} alt={'cycling background'}/>
            </div>
            <div
              className="z-[7] absolute bg-[hsla(0,0%,100%,.3)] w-[120px] h-[60px] rounded-full rotate-[30deg] top-[30%] -left-12 transition-all duration-200 group-hover/item:bg-white"/>
            <div
              className="absolute z-50 top-[39%] left-[20px] bg-[url('../../public/classes/power.png')] w-[35px] h-[35px] bg-cover transition-all duration-200 group-hover/item:bg-[url('../../public/classes/powerRed.png')]"/>
            <div className="absolute z-50 bottom-[5%] left-[5%] text-white/80">
              <p className="text-2xl font-bold mb-2">Power</p>
              <div className="bg-[#ff003c] text-white px-2 py-[1px] font-medium text-[15px]">
                <p>Saturday: 9:00am-10:00am</p>
              </div>
            </div>
          </div>
          <div className="max-w-[300px] w-full h-[300px] relative group/item cursor-pointer max-[950px]:max-w-[700px]">
            <div className="h-full overflow-hidden">
              <Image
                className="relative z-10 group-hover/item:scale-125 transition-all ease-in duration-[.4s] h-full object-cover grayscale group-hover/item:grayscale-0"
                src={MeditationBG} alt={'cycling background'}/>
            </div>
            <div
              className="z-[11] absolute bg-[hsla(0,0%,100%,.3)] w-[120px] h-[60px] rounded-full rotate-[30deg] top-[30%] -left-12 transition-all duration-200 group-hover/item:bg-white"/>
            <div
              className="absolute z-50 top-[39%] left-[20px] bg-[url('../../public/classes/meditation.png')] w-[35px] h-[35px] bg-cover transition-all duration-200 group-hover/item:bg-[url('../../public/classes/meditationRed.png')]"/>
            <div className="absolute z-50 bottom-[5%] left-[5%] text-white/80">
              <p className="text-2xl font-bold mb-2">Meditation</p>
              <div className="bg-[#ff003c] text-white px-2 py-[1px] font-medium text-[15px]">
                <p>Friday: 1:00pm-2:00pm</p>
              </div>
            </div>
          </div>
          <div className="max-w-[300px] w-full h-[300px] relative group/item cursor-pointer max-[950px]:max-w-[700px]">
            <div className="h-full overflow-hidden">
              <Image
                className="relative z-[8] group-hover/item:scale-125 transition-all ease-in duration-[.4s] h-full object-cover grayscale group-hover/item:grayscale-0"
                src={MmaBG} alt={'karate background'}/>
            </div>
            <div
              className="z-[9] absolute bg-[hsla(0,0%,100%,.3)] w-[120px] h-[60px] rounded-full rotate-[30deg] top-[30%] -left-12 transition-all duration-200 group-hover/item:bg-white"/>
            <div
              className="absolute z-50 top-[39%] left-[20px] bg-[url('../../public/classes/mma.png')] w-[35px] h-[35px] bg-cover transition-all duration-200 group-hover/item:bg-[url('../../public/classes/mmaRed.png')]"/>
            <div className="absolute z-50 bottom-[5%] left-[5%] text-white/80">
              <p className="text-2xl font-bold mb-2">Martial Arts</p>
              <div className="bg-[#ff003c] text-white px-2 py-[1px] font-medium text-[15px]">
                <p>Sunday: 6:00pm-7:00pm</p>
              </div>
            </div>
          </div>
          <div
            className="col-start-3 col-end-5 max-w-[616px] w-full h-[300px] relative group/item cursor-pointer max-[950px]:max-w-[700px]">
            <div className="h-full overflow-hidden">
              <Image
                className="relative z-[6] group-hover/item:scale-125 transition-all ease-in duration-[.4s] h-full object-cover grayscale group-hover/item:grayscale-0"
                src={WorkoutBG} alt={'cycling background'}/>
            </div>
            <div
              className="z-[7] absolute bg-[hsla(0,0%,100%,.3)] w-[120px] h-[60px] rounded-full rotate-[30deg] top-[30%] -left-12 transition-all duration-200 group-hover/item:bg-white"/>
            <div
              className="absolute z-50 top-[39%] left-[20px] bg-[url('../../public/classes/workout.png')] w-[35px] h-[35px] bg-cover transition-all duration-200 group-hover/item:bg-[url('../../public/classes/workoutRed.png')]"/>
            <div className="absolute z-50 bottom-[5%] left-[5%] text-white/80">
              <p className="text-2xl font-bold mb-2">Workout</p>
              <div className="bg-[#ff003c] text-white px-2 py-[1px] font-medium text-[15px]">
                <p>Monday: 4:00pm-5:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-12 max-[950px]:bg-[#ff003c] ">
        <Image className="w-full relative z-10 h-[200px] object-cover max-[950px]:hidden" src={CtaBG} alt={'bg'} />
        <div className="py-4 absolute left-0 right-60 m-auto top-0 bottom-0 h-fit z-50 flex justify-center items-center text-white gap-x-16 max-[950px]:static max-[950px]:flex-col gap-y-7 max-[950px]:text-center">
          <p className="text-2xl font-bold max-w-[400px]">We Are Always Providing Best Fitness Service For You</p>
          <Link href={'/contact'}>
            <div className="group/button flex relative font-bold items-center bg-white text-black px-7 py-3 gap-x-1">
              JOIN WITH US
              <IoArrowForward color={'red'} size={18} />
              <div className="absolute -z-10 border-white border-[1px] w-full h-full left-[10%] -top-[30%] group-hover/button:left-0 group-hover/button:top-0 transition-all duration-500" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Classes;