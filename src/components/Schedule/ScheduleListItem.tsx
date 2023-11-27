import React from 'react';
import {ISchedule} from "@/constants/schedule";
import Link from "next/link";

interface Props {
  schedule: ISchedule
}

const ScheduleListItem = ({schedule}: Props) => {
  return (
    <div className="flex items-center max-w-[1100px] w-full bg-[#f2f2f2] px-6 py-4 max-[800px]:flex-col max-[800px]:gap-y-7">
      <div className="flex flex-col min-w-[150px] w-full  max-[800px]:items-center  max-[800px]:justify-center">
        <p className="text-[#a0a0a0]">Class Name</p>
        <p className="text-black text-[18px] font-bold mt-3">{schedule.name}</p>
      </div>
      <div className="flex flex-col min-w-[250px] w-full max-[800px]:items-center  max-[800px]:justify-center">
        <p className="text-[#a0a0a0]">Time</p>
        <p className="text-black text-[18px] font-bold mt-3">{schedule.time}</p>
      </div>
      <div className="flex flex-col min-w-[150px] w-full max-[800px]:items-center  max-[800px]:justify-center">
        <p className="text-[#a0a0a0]">Trainer</p>
        <p className="text-black text-[18px] font-bold mt-3">{schedule.trainer}</p>
      </div>
      <div className="flex flex-col min-w-[50px] max-w-[150px] w-full max-[800px]:items-center  max-[800px]:justify-center">
        <Link href={'/contact'}>
          <button className="bg-[#555555] hover:bg-[#ff003c] transition-all duration-300 text-white px-4 py-2 text-[14px] rounded-full">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ScheduleListItem;