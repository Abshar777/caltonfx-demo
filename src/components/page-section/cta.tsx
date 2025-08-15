import React from "react";
import { Button } from "../ui/button";

const Cta = () => {
  return (
  
      <div className="w-full relative  gap-10 flex items-center justify-center flex-col  rounded-3xl  flex-center">
        <h1 className="md:text-6xl text-4xl md:w-1/2 w-full text-center font-bold">
          Ready to transform your financial management?
        </h1>
        <p className="text-lg w-1/2 text-center">
          Our platform is designed with you in mind, offering intuitive tools
          and seamless processes that empower you to take control of your
          financial future.
        </p>

        <img
          src="/hero.svg"
          alt=""
          className="absolute top-1/2 opacity-50 right-0 w-full z-[-1]"
        />
        <Button
          size="lg"
          className="bg-dg text-base text-lig rounded-full p-6 w-min  font-dm font-normal "
        >
          Open Account
        </Button>
        <div className="flex flex-col gap-4 mt-10"></div>
      </div>
   
  );
};

export default Cta;
