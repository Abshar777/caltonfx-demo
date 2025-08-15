import React from "react";
import { AiFillBank } from "react-icons/ai";
import { Button } from "../ui/button";

const WhyChoosUs = () => {
  return (
    <div className="flex flex-col relative md:px-30 px-4 md:py-20 py-10 gap-10">
      <div className="relative">
        <h1 className="font-bold md:text-7xl text-4xl  md:w-2/3  w-full  ">
          Discover opportunities on 1200+ instruments
        </h1>
        <div className="bg-lig font-semibold md:top-[18%] left-[50%] top-[1%]  md:-rotate-8 -rotate-6 hover:rotate-0 transition-all duration-300 hover:top-[16%] cursor-pointer text-dg px-4 font-dm absolute py-2 rounded-full flex-center gap-2">
          <AiFillBank className="" />
          {/* <img src="/gw.png" alt="bank" className="md:w-10 w-6" /> */}
          <p className="text-sm md:text-normal">why choos us</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="flex flex-col justify-between gap-30 md:px-20 md:py-10 px-4 py-4">
          <img
            src="/whyChoos.webp"
            className="md:w-90 w-70 rounded-4xl drop-shadow-xl  -rotate-12"
          />
          <div className="flex flex-col gap-4 md:w-[40rem] text-lg  md:mt-20 w-full ">
            <p>
              Start your ultimate investment experience to grow, achieve, and
              succeed.Discover global markets with an easy-to-use app.
            </p>
            <Button
              size="lg"
              className="bg-dg text-base text-lig rounded-full p-6 w-min  font-dm font-normal "
            >
              Open Account
            </Button>
          </div>
        </div>
        <div className="md:h-full h-[70vh] relative overflow-hidden w-full  rounded-3xl bg-lig">
          <div className="w-2 h-2 rounded-full absolute z-10 top-4 left-4 bg-dg"></div>
          <div className="w-2 h-2 rounded-full absolute z-10 top-4 right-4 bg-dg"></div>
          <div className="w-2 h-2 rounded-full absolute z-10 bottom-4 left-4 bg-dg"></div>
          <div className="w-2 h-2 rounded-full absolute z-10 bottom-4 right-4 bg-dg"></div>
          <img src="/bgImg.svg" className="w-full absolute bottom-0" />
          <div className="w-full h-1/2 flex-center absolute bottom-0">
            <img src="/phoneImg.png" alt="" className="w-2/3 absolute " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosUs;
