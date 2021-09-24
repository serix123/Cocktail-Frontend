import React from 'react'
import Header from './Header';

function Home() {
  return (

    <div className="flex flex-col h-full overflow-hidden ">
      <Header />
      <div className="relative mt-24 h-96"></div>
      <div className="flex h-96 w-full bg-white rounded-t-3xl">
        <div className="p-10 pr-16 py-20 mx-auto ">
          <h3 className="text-black font-main font-bold text-4xl tracking-wide mb-6">Lorem ipsum dolor sit amet.</h3>
          <p className="text-gray-700 font-body font-semibold italic text-xl">
            Providing a blissful experience for the ladies and the gents.
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default Home
