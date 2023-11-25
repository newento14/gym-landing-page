import React from 'react';
import Image from "next/image";
import {
  Circle,
  Equipment, Gym,
  Nutritions,
  Progression,
  RunningGirl,
  Text,
  WeightLifter,
  Wind,
  Workout
} from "../../../public";
import TitleBackground from "@/components/TitleBackground";
import {IoArrowForward} from "react-icons/io5";
import Link from "next/link";

const HeroBlocks = () => {
  return (
    <div className="bg-[url('../../public/background1.jpg')] py-8">
      <div
        className="flex flex-wrap gap-x-8 gap-y-8 justify-center items-center -mt-[100px]">
        <div
          className="flex flex-col pt-12 justify-start items-center gap-y-4 rounded-bl-3xl rounded-tr-3xl bg-white py-6 px-10 max-w-[350px] min-h-[300px] shadow-2xl z-10 text-center hover:bg-[url(../../public/block-bg.jpg)] hover:text-white">
          <Image src={Progression} alt={'progression'}/>
          <p className="font-bold text-xl">PROGRESSION</p>
          <p className="text-sm">Our team of experts will work with you to create a customized plan that helps you
            achieve success one step at a time.</p>
        </div>
        <div
          className="flex flex-col pt-12 justify-start items-center gap-y-4 rounded-bl-3xl rounded-tr-3xl bg-white py-6 px-10 max-w-[330px] min-h-[300px] shadow-2xl z-10 text-center hover:bg-[url(../../public/block-bg.jpg)] hover:text-white">
          <Image src={Workout} alt={'workout'}/>
          <p className="font-bold text-xl">WORKOUT</p>
          <p className="text-sm">With a variety of workouts to choose from, you'll have everything you need to get into
            the best shape of your life.</p>
        </div>
        <div
          className="flex flex-col pt-12 justify-start items-center gap-y-4 rounded-bl-3xl rounded-tr-3xl bg-white py-6 px-10 max-w-[350px] min-h-[300px] shadow-2xl z-10 text-center hover:bg-[url(../../public/block-bg.jpg)] hover:text-white">
          <Image src={Nutritions} alt={'nutritions'}/>
          <p className="font-bold text-xl">NUTRITIONS</p>
          <p className="text-sm font">Our team will work with you to create a personalized meal plan that helps you
            reach your specific health goals.</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[6rem]">
        <div className="flex max-w-[1026px]">
          <div className="flex flex-1 flex-col justify-center items-start h-[600px] gap-y-6 max-[1000px]:px-8 max-[1000px]:items-center">
            <div className="relative w-fit h-fit text-white font-semibold">
              <TitleBackground color={'#ff003c'}/>
              <p className="absolute w-fit z-10 top-[20%] right-0 left-0 ml-auto mr-auto">WHO WE ARE</p>
            </div>
            <p className="font-bold text-3xl">Take Your Health And Body To Next Level</p>
            <p className="text-[16px] text-[#646464] font-medium ">Take your health and body to the next level with our comprehensive program designed to help you reach
              your
              fitness goals.</p>
            <div className="flex text-center gap-y-7 max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:w-full">
              <div className="flex flex-1 flex-col justify-center items-center min-[1000px]:border-r-[1px] border-black px-4 min-w-[170px]">
                <Image className="w-[54px]" src={WeightLifter} alt={'Weight Lifter'} />
                <p className="font-bold text-[20px]">PROFESSIONAL TRAINERS</p>
              </div>
              <div className="flex flex-1 flex-col justify-center items-center min-[1000px]:border-r-[1px] border-black px-4 min-w-[170px]">
                <Image className="w-[54px]" src={Equipment} alt={'Weight Lifter'} />
                <p className="font-bold text-[20px]">MODERN EQUIPMENTS</p>
              </div>
              <div className="flex flex-1 flex-col justify-center items-center px-4 min-w-[170px]">
                <Image className="w-[54px]" src={Gym} alt={'Weight Lifter'} />
                <p className="font-bold text-[20px]">FANCY GYM MACHINES</p>
              </div>
            </div>
            <Link href={'/classes'}>
              <div className="group/button flex relative z-10 font-bold items-center bg-[#3f3f3f] text-white px-7 py-3 hover:bg-[#ff003c] gap-x-1 mt-8">
                TAKE A TOUR
                <IoArrowForward color={'white'} size={18} />
                <div className="absolute z-[9] border-[#3f3f3f] border-[1px] w-full h-full left-[10%] -top-[30%] group-hover/button:border-[#ff003c] group-hover/button:left-0 group-hover/button:top-0 transition-all duration-500" />
              </div>
            </Link>
          </div>
          <div className="relative top-0 flex-1 min-w-[500px] ml-12 max-[1000px]:hidden">
            <Image className="absolute z-[11]" src={RunningGirl} alt={'RunningGirl'}/>
            <Image className="absolute top-[13rem] z-[11] right-[23%] w-[17%]" src={Wind} alt={'Wind'}/>
            <Image className="absolute h-[96%]" src={Text} alt={'Text'}/>
            <Image className="absolute right-[2rem]" src={Circle} alt={'Circle'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlocks;