import React from "react";

export const CarWash = () => {
  return (
    <section
      id="carwash"
      className="relative carwash-section
    bg-[url('/carwash/carwashbg2.svg')] 
    bg-no-repeat 
    bg-[length:150%_auto] 
    md:bg-[length:100%_auto] 
    bg-top md:min-h-[90vh] min-h-[40vh]
    overflow-hidden">
      {/* <div className="absolute inset-0 bg-black/90" /> relative z-10 */}
      <div className="text-center ">
        <h1 className="text-2xl font-bold md:text-4xl mb-4 text-white pt-10">
          Auto
          <span className="text-[#E52323]"> Detailing </span>Services
        </h1>
      </div>
    </section>
  );
};
