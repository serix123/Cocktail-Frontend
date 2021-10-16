import React from 'react';
import DrinksList from '../drinks/DrinksList'


function HomeContent() {
  return (
    <div className="flex w-full bg-white rounded-t-3xl pt-16 px-2 sm:px-8 pb-24 z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-5 text-gray-800">
        <DrinksList/>
      </div>
    </div>
  )
}

export default HomeContent
