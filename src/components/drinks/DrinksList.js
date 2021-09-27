import React from 'react'
import DrinkSummary from './DrinkSummary'

function DrinksList() {
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
