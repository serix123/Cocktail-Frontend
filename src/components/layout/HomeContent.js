import React from 'react';
import DrinksList from '../drinks/DrinksList'
import { ReactComponent as Logo } from "../../assets/pics/Card.svg";


function HomeContent() {
  return (
    <div className="flex w-full h-full bg-white rounded-t-3xl pt-16 px-2 sm:px-8 pb-24 z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-5 text-gray-800">
        <DrinksList />
        <Logo className="hidden md:block"/>
      </div>
    </div>
  )
}

export default HomeContent
