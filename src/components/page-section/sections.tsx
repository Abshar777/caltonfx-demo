import React from "react";

const Sections = () => {
  return (
    <>
      <div className="grid md:py-20 py-10 md:px-20 px-4 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="md:text-7xl md:text-start text-center text-4xl font-bold">
            Simplifying your financial journey
          </h1>
          <p className="md:text-lg text-sm md:text-start text-center">
            Our platform is designed with you in mind, offering intuitive tools
            and seamless processes that empower you to take control of your
            financial future.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full md:h-[70vh] h-[50vh] bg-dg rounded-3xl"></div>
          {/* <div className="w-full h-full bg-dg rounded-3xl"></div> */}
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col-reverse md:px20 px-4 gap-4">
        <div className="flex  flex-col gap-4">
          <div className="w-full md:h-[70vh] h-[50vh] bg-dg rounded-3xl"></div>
          {/* <div className="w-full h-full bg-dg rounded-3xl"></div> */}
        </div>
        <div className="flex flex-col md:ml-3 ml-0 items-end w-full justify-center gap-4">
          <h1 className="md:text-7xl md:text-start text-center text-4xl font-bold">
            Simplifying your financial journey
          </h1>
          <p className="md:text-lg text-sm md:text-start text-center">
            Our platform is designed with you in mind, offering intuitive tools
            and seamless processes that empower you to take control of your
            financial future.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sections;
