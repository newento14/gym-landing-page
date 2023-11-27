import React from "react";
import Link from "next/link";
import {schedule} from "@/constants/schedule";
import ScheduleListItem from "@/components/Schedule/ScheduleListItem";

interface MapType {
  [key: string]: number;
}

const map: MapType = {
  monday: 0,
  tuesday: 1,
  wednesday: 2,
  thursday: 3,
  friday: 4,
  saturday: 5,
  sunday: 6
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Page({params}: { params: { day: string } }) {
  return (
    <main>
      <div
        className="flex justify-center items-end p-2 bg-[url('../../public/about/banner.jpg')] h-[300px] object-cover bg-cover bg-no-repeat bg-right">
        <p className="text-4xl font-bold text-white">Schedule by Day</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-12">
        {Object.keys(map).map(x => (
          x === params.day ? (
            <Link href={`./${x}`} key={x}>
              <div
                className="border-[1px] border-[#d7d7d7] font-bold px-4 py-2 rounded-full text-[14px] bg-[#ff003c] text-white hover:shadow-2xl transition-all duration-300">
                {capitalizeFirstLetter(x)}
              </div>
            </Link>
          ) : (
            <Link href={`./${x}`} key={x}>
              <div
                className="border-[1px] border-[#d7d7d7] font-bold px-4 py-2 rounded-full text-[14px] hover:bg-[#ff003c] hover:text-white hover:shadow-2xl transition-all duration-300">
                {capitalizeFirstLetter(x)}
              </div>
            </Link>
          )
        ))}
      </div>
      <div className="flex flex-col gap-y-4 justify-center items-center mt-8">
        {schedule[map[params.day]].map((x, i) => (
          <ScheduleListItem key={i} schedule={x} />
        ))}
      </div>
    </main>
  )
}