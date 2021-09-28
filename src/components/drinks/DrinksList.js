import React from 'react';
import { useSelector } from 'react-redux';
import DrinkSummary from './DrinkSummary';


function DrinksList() {

  const recipes = useSelector((state) => state.recipe);
  console.log(recipes)

  return (
    <div className="col-span-full lg:col-span-2">
      <h2 className="font-body font-bold text-2xl my-5 tracking-normal">🍷 Latest Additions </h2>
      <div className="shadow-md rounded-2xl border-t border-l border-r border-gray-100 ">
        <DrinkSummary />
        <DrinkSummary />
        <DrinkSummary />
        <DrinkSummary />
        <DrinkSummary />
      </div>
    </div>
    
  )
}

export default DrinksList
