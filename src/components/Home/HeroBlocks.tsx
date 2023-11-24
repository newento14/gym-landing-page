import React from 'react';
import Image from "next/image";
import {Nutritions, Progression, Workout} from "../../../public";
import TitleBackground from "@/components/TitleBackground";

const HeroBlocks = () => {
  return (
    <div className="bg-[url('../../public/background1.jpg')]">
      <div
        className="flex flex-wrap gap-x-8 gap-y-8 justify-center items-center -mt-[100px]">
        <div
          className="flex flex-col pt-12 justify-start items-center gap-y-4 rounded-bl-3xl rounded-tr-3xl bg-white py-6 px-10 max-w-[350px] min-h-[300px] shadow-lg z-10 text-center hover:bg-[url(../../public/block-bg.jpg)] hover:text-white">
          <Image src={Progression} alt={'progression'}/>
          <p className="font-bold text-xl">PROGRESSION</p>
          <p className="text-sm">Our team of experts will work with you to create a customized plan that helps you
            achieve success one step at a time.</p>
        </div>
        <div
          className="flex flex-col pt-12 justify-start items-center gap-y-4 rounded-bl-3xl rounded-tr-3xl bg-white py-6 px-10 max-w-[330px] min-h-[300px] shadow-lg z-10 text-center hover:bg-[url(../../public/block-bg.jpg)] hover:text-white">
          <Image src={Workout} alt={'workout'}/>
          <p className="font-bold text-xl">WORKOUT</p>
          <p className="text-sm">With a variety of workouts to choose from, you'll have everything you need to get into
            the best shape of your life.</p>
        </div>
        <div
          className="flex flex-col pt-12 justify-start items-center gap-y-4 rounded-bl-3xl rounded-tr-3xl bg-white py-6 px-10 max-w-[350px] min-h-[300px] shadow-lg z-10 text-center hover:bg-[url(../../public/block-bg.jpg)] hover:text-white">
          <Image src={Nutritions} alt={'nutritions'}/>
          <p className="font-bold text-xl">NUTRITIONS</p>
          <p className="text-sm font">Our team will work with you to create a personalized meal plan that helps you
            reach your specific health goals.</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <div className="relative w-fit h-fit text-white font-semibold">
            <TitleBackground color={'#ff003c'}/>
            <p className="absolute w-fit z-10 top-[20%] right-0 left-0 ml-auto mr-auto">WHO WE ARE</p>
          </div>
          <p>Take Your Health And Body To Next Level</p>
          <p>Take your health and body to the next level with our comprehensive program designed to help you reach your
            fitness goals.</p>
          <div className="flex">
            <div>
              <p>PROFESSIONAL TRAINERS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlocks;