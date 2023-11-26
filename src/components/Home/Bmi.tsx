'use client'
import {useRef, useState} from "react";

const bmiMap = {
  '18.50': 'Underweight',
  '24.99': 'Normal',
  '29.99': 'Overweight',
}

const Bmi = () => {
  const heightRef = useRef<HTMLInputElement>(null)
  const weightRef = useRef<HTMLInputElement>(null)
  const [bmi, setBmi] = useState(0);
  const calculateBMI = () => {
    if (heightRef.current !== null && weightRef.current !== null) {
      const height = Number(heightRef.current.value) / 100;
      const weight = Number(weightRef.current.value);
      if (isNaN(height) || isNaN(weight)) {
        alert('enter valid height and weight')
        return;
      }
      setBmi(Number((weight / (height ** 2)).toFixed(2)))
    }
  }

  const calculateWeight = () => {
    if (bmi === 0)
      return '';
    if (bmi < 18.5)
      return 'Underweight'
    if (bmi <= 24.99)
      return "Normal"
    if (bmi <= 29.99)
      return "Overweight"
    return 'Very overweight'
  }

  return (
    <div
      className="flex justify-center relative bg-black w-full mt-12 h-fit p-6 text-white bg-[url('../../public/testimonials/bmi-bg.jpg')] object-cover bg-cover bg-no-repeat bg-right">
      <div className="relative z-10 flex flex-col gap-y-4 max-w-[460px] mr-80 max-[850px]:mr-0 max-[850px]:max-w-full">
        <p className="font-bold text-4xl">Let&lsquo;s Calculate Your <span className="text-red-600">BMI</span></p>
        <p className="text-white/70">Easily determine your body mass index with our accurate calculation tool.</p>
        <div className="flex w-full items-start gap-x-4">
          <div className="flex flex-col items-start gap-y-4 w-[50%]">
            <input type='text' ref={weightRef}
                   className="p-3 w-full bg-transparent border-[#222425] border-2 text-[14px] max-[850px]:bg-black"
                   placeholder="Weight / kg"/>
            <p className="text-[14px] ml-1 font-medium">Your BMI is: {bmi !== 0 && <span className="text-red-600">{bmi}</span>}</p>
          </div>
          <div className="flex flex-col items-start gap-y-4 w-[50%]">
            <input type='text' ref={heightRef}
                   className="p-3 w-full bg-transparent border-[#222425] border-2 text-[14px] max-[850px]:bg-black"
                   placeholder="Height / cm"/>
            <p className="text-[14px] ml-1 font-medium">Your Weight is: <span className="text-red-600">{calculateWeight()}</span></p>
          </div>
        </div>
        <button onClick={calculateBMI}
                className="bg-[#323232] w-fit h-[2.5rem] hover:bg-[#ff003c] px-6 py-2 mt-1 font-semibold text-[15px] transition-all duration-300">
          CALCULATE
        </button>
      </div>
    </div>
  );
};

export default Bmi;