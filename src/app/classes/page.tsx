import React from 'react';
import Classes from "@/components/Home/Classes";

const Page = () => {
  return (
    <main>
      <div
        className="flex justify-center items-end p-2 bg-[url('../../public/about/banner.jpg')] h-[300px] object-cover bg-cover bg-no-repeat bg-right">
        <p className="text-4xl font-bold text-white">Classes</p>
      </div>
      <Classes/>
    </main>
  );
};

export default Page;