import React from 'react'

function NewDrink() {

  // TODO Add recipe form

  return (
    <div className="flex min-h-screen justify-center content-center pt-28 sm:pt-32">
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-4 max-w-6xl gap-2 md:gap-5 w-full mx-5 ">
        <div className="col-span-full lg:col-span-2 row-span-2 md:row-span-3 order-last lg:order-first">       
          <div className="shadow-lg rounded-2xl border-t border-l border-r border-gray-200 w-full h-full p-5">
            <div className="flex ">
              <span className="text-lg"><i className="fa-solid fa-pen-to-square"></i></span>
              <h3 className="font-body font-semibold text-3xl text-gray-700"> Welcome</h3>
            </div>
            <form action="" onSubmit={null}>

            </form>
          </div>
        </div>
        
        <div className="col-span-full lg:col-span-1 md:row-span-2 hidden md:block">
          <div className="shadow-lg rounded-2xl border-t border-l border-r border-gray-200 w-full h-full">

          </div>
        </div>
      </div>
    </div>
  )
}

export default NewDrink
