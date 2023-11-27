import React from 'react';
import TitleBackground from "@/components/TitleBackground";
import Image from "next/image";
import {Circle, RunningGirl, Text, Wind} from "../../../public";
import Link from "next/link";
import {IoArrowForward} from "react-icons/io5";
import {Image1, Image2, Mountains, Target} from "../../../public/about";

const Page = () => {
  return (
    <main>
      <div
        className="flex justify-center items-end p-2 bg-[url('../../public/about/banner.jpg')] h-[300px] object-cover bg-cover bg-no-repeat bg-right">
        <p className="text-4xl font-bold text-white">About Us</p>
      </div>
      <div className="flex justify-center items-center mt-[6rem]">
        <div className="flex max-w-[1026px]">
          <div
            className="flex flex-1 flex-col justify-center items-start h-[600px] gap-y-6 max-[1000px]:px-8 max-[1000px]:items-center">
            <div className="relative w-fit h-fit text-white font-semibold">
              <TitleBackground color={'#ff003c'}/>
              <p className="absolute w-fit z-10 top-[20%] right-0 left-0 ml-auto mr-auto">WHO WE ARE</p>
            </div>
            <p className="font-bold text-3xl">We Will Give You Strength and Health</p>
            <p className="text-[16px] text-[#646464] font-medium ">At Gymate, we are dedicated to helping you achieve
              the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized
              fitness and nutrition plan that helps you reach your specific goals.</p>
            <Link href={'/contact'}>
              <div
                className="group/button flex relative z-10 font-bold items-center bg-[#ff003c] text-white px-7 py-3 gap-x-1 mt-8">
                CONTACT US
                <IoArrowForward color={'white'} size={18}/>
                <div
                  className="absolute z-[9] border-[#ff003c] border-[1px] w-full h-full left-[10%] -top-[30%] group-hover/button:left-0 group-hover/button:top-0 transition-all duration-500"/>
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
      <div className="flex justify-center items-center my-12">
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col justify-center items-center h-[400px] w-[500px] shadow-2xl p-6 text-center">
            <Image className="h-[20%] object-contain" src={Target} alt={'target'} />
            <p className="font-bold text-3xl my-2">Our History</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur deleniti deserunt
              dignissimos doloremque enim exercitationem, explicabo fuga harum iste laboriosam, magnam magni maxime
              minus omnis quam voluptatibus! Mollitia, quisquam!</p>
          </div>
          <div className="flex flex-col justify-center items-center h-[400px] w-[500px] text-center">
            <Image className="h-full" src={Image1} alt={''} />
          </div>
          <div className="flex flex-col justify-center items-center h-[400px] w-[500px] text-center">
            <Image className="h-full" src={Image2} alt={''} />
          </div>
          <div className="flex flex-col justify-center items-center h-[400px] w-[500px] shadow-2xl p-6 text-center">
            <Image className="h-[20%] object-contain" src={Mountains} alt={'Mountains'} />
            <p className="font-bold text-3xl my-2">Our History</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur deleniti deserunt
              dignissimos doloremque enim exercitationem, explicabo fuga harum iste laboriosam, magnam magni maxime
              minus omnis quam voluptatibus! Mollitia, quisquam!</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;