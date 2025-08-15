"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 flex-center py-4 ">
      <div className="md:w-full w-[95%] max-w-6xl  bg-white/30 md:px-10 px-4 backdrop-blur-sm flex items-center justify-between border border-white/10 shadow-2xl py-8 rounded-full h-10 ">
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </div>
        <div className="flex-center md:flex hidden gap-4">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex-center gap-4">
            
          <Button className="bg-dg text-lig rounded-full p-5   font-dm ">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
