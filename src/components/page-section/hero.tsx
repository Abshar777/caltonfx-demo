"use client";
import React from "react";
import { AiFillBank } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <div className="w-full relative overflow-hidden  flex-col flex">
      <div className="w-full md:h-[50vh] h-[50vh]  md:mt-10 relative  flex-center md:items-end items-center">
        <div className="bg-lig font-semibold md:top-[20%] top-[25%]  md:-rotate-8 -rotate-6 hover:rotate-0 transition-all duration-300 hover:top-[16%] cursor-pointer text-dg px-4 font-dm absolute py-2 rounded-full flex-center gap-2">
          {/* <AiFillBank className="" /> */}
          <img src="/gw.png" alt="bank" className="md:w-10 w-6" />
          <p className="text-sm md:text-normal">Guinness Record Holder</p>
        </div>
        <h1 className="font-bold md:text-9xl uppercase text-4xl text-center">
          Trading platform to earn extra
        </h1>
      </div>
      <div className="w-full md:mt-0 -mt-20    md:h-[110vh] h-[40vh] flex flex-col">
        <div className="w-full relative  h-full flex-center md:gap-10 gap-4">
          <img
            src="/herocard.webp"
            alt="hero"
            className="md:w-70 w-40 jitter1 md:mr-[50rem] mr-[18rem] -rotate-10 absolute"
          />
          <img
            src="/hero1-1.png"
            alt="hero"
            className="md:w-70 w-35 jitter2     "
          />
          <img
            src="/hero1-2.png"
            alt="hero"
            className="md:w-70 w-35 jitter1  md:-mt-40 -mt-20 "
          />
          <img
            src="/herocard2.webp"
            alt="hero"
            className="md:w-70 w-40 jitter2 md:ml-[50rem] ml-[16rem] rotate-10 absolute"
          />
        </div>
        <img
          src="/hero.svg"
          alt="hero"
          className="w-full md:block hidden mt-30 absolute z-[-1]"
        />
      </div>
      <div className="flex flex-col gap-4 md:w-[50rem] text-lg md:-mt-10 mt-10 w-full md:px-30 px-5">
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
  );
};

export default Hero;
