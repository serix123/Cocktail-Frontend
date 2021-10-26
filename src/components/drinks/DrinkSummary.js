import React from "react";
import { Link } from "react-router-dom";


function DrinkSummary({ recipe }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:h-64 md:h-52 w-full overflow-hidden visible">
        {/* image */}
        <Link to={`/Recipe/${recipe._id}`}>
          <div className="relative w-full h-64 sm:h-full sm:w-48 overflow-hidden flex-shrink-0">
            <div className="absolute w-full h-full bg-gray-50 flex-shrink-0 transform transition hover:scale-110 ease-in-out duration-500">
              <span className="">
                <img src={recipe.image} alt={recipe.recipeName} />
              </span>
            </div>
            <div className="absolute w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition ease-in-out">
              <div className="absolute w-full h-full bg-black opacity-40"></div>
              <p className="font-body text-white absolute">View Product</p>
            </div>
          </div>
        </Link>
        {/* description */}
        <Link to={`/Recipe/${recipe._id}`}>
          <div className="p-5 flex flex-col flex-grow justify-between h-full  hover:bg-gray-100 border-t border-gray-100">
            <div className="flex space-x-10 justify-between ">
              <div className="max-h-full overflow-hidden flex flex-col max-w-full">
                <h3 className="font-main font-bold tracking-wide text-sm sm:text-2xl mb-2 overflow-hidden max-w-full">
                  {recipe.recipeName.toUpperCase()}
                </h3>
                <p className="font-body text-xs sm:text-sm text-gray-500 overflow-ellipsis overflow-hidden">
                  {recipe.description}
                </p>
              </div>
              <span className="flex-shrink-0 flex justify-end ">
                <i className="fa-solid  fa-bookmark text-red-600 text-2xl "></i>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DrinkSummary;
