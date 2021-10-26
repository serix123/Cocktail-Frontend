import React from "react";
import { ReactComponent as Logo } from "../../assets/pics/shape.svg";

export default function Header() {
  return (
    <div className="absolute w-full h-3/4 mx-auto overflow-hidden">
      <div className="video-header absolute top-0 left-0 w-full h-full -z-100 "></div>
      <div className="absolute top-0 left-0 w-full h-full  -z-90"></div>
      <div className="flex flex-shrink mx-auto lg:mx-44 max-w-4xl h-full relative -z-85 ">
        
        <Logo className="hidden md:block absolute -left-28 top-24 -z-75 h-96"/>
        <div className="ml-8 pt-40   ">
          <h3 className="text-red-600 font-main font-bold text-4xl md:text-6xl tracking-wide mb-6">
            The Right Mix For Your Taste.
          </h3>
          <p className="text-red-400 font-body font-bold italic text-lg md:text-2xl">
            Providing a blissful experience for the ladies and the gents.
          </p>
        </div>
        <div className="w-3/5 "></div>
      </div>
    </div>
  );
}
