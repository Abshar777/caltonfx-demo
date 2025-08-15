import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ImGit } from "react-icons/im";

const features = [
  {
    title: "Quick withdrawals",
    description:
      "Easy withdrawals and deposits via Netbanking, e-wallets, or digital currencies.",
    image: "/card.png",
  },
  {
    title: "Caring Customer Support 24/7",
    description:
      "We speak English and 10+ other languages. Whatever question you might have, drop us a line.",
    image: "/chat.png",
  },
  {
    title: "No commission",
    description:
      "Pay no trading fees, swaps, or payment method charges. We cover everything.",
    image: "/0.png",
  },
];

const Features = () => {
  return (
    <div className="w-full flex-center">
      <div className="w-[99%] py-12 overflow-hidden px- bg-dg mt-15 rounded-lg  flex-center gap-12 flex-col">
        <h1 className="text-lig text-center md:text-6xl text-4xl font-inter italic uppercase font-bold">
          #All set to make a profit
        </h1>

        <div className="grid md:px-20  px-5 md:grid-cols-5 md:translate-x-70 grid-cols-1 gap-2 md:gap-10 justify-center">

            {features.map((e, i) => (
              <div
                className={cn(
                  "card w-full flex-center flex-col  rounded-xl bg-background py-5 px-3",
                  `${i == 1 && "md:scale-115"}`,
                  `${i == 0 && "md:scale-110"}`,
                  `${i == 2 && "md:scale-110"}`
                )}
              >
                <h1 className="font-bold  md:text-xl text-lg md:w-[90%] mb-2 capitalize  text-center ">
                  {e.title}
                </h1>
                <p className="text-xs text-center">{e.description}</p>

                <div className=" overflow-hidden rounded-lg md:block hidden relative h-full md:min-h-40 md:max-h-auto max-h-60 min-h-20 mt-4  bg-white/30 border border-background w-full ">
                  <div className="w-2 h-2 rounded-full absolute z-10 top-2 left-2 bg-dg"></div>
                  <div className="w-2 h-2 rounded-full absolute z-10 top-2 right-2 bg-dg"></div>
                  <div className="w-2 h-2 rounded-full absolute z-10 bottom-2 left-2 bg-dg"></div>
                  <div className="w-2 h-2 rounded-full absolute z-10 bottom-2 right-2 bg-dg"></div>
                  <img
                    src={e.image}
                    className=" w-full  object-cover  h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default Features;
