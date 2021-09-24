import React from 'react'

export default function Header() {
  
  return (
    <div className="absolute w-full h-4/5 mx-auto overflow-hidden">
      <div className="video-header absolute top-10 left-0 w-full h-full -z-100 "></div>
      <div className="absolute top-10 left-0 w-full h-full  bg-gray-900 opacity-50 -z-90"></div>
      <div className="flex flex-shrink mx-auto lg:mx-44 max-w-4xl h-full relative">
        
        <div className="ml-8 pt-48 ">
          <h3 className="text-red-500 font-main font-bold text-2xl md:text-4xl tracking-wide mb-6">The Right Mix for your taste.</h3>
          <p className="text-gray-300 font-body font-semibold italic text-md md:text-xl">
            Providing a blissful experience for the ladies and the gents.
          </p>
        </div>
        <div className="w-3/5"></div>
      </div>
    </div>
    
  )
}
