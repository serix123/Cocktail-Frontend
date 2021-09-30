import React from 'react';
import { NavLink } from "react-router-dom";

function SignedInLinks() {


  
  // TODO change navlink to username

  return (
    <div className="font-body font-semibold">
      <NavLink to="/newRecipe" className="inline-block align-baseline text-lg mr-2 px-4 py-2 leading-none border rounded-full text-red-500 border-red-500  hover:text-white hover:bg-red-500 mt-4 lg:mt-0 transition duration-300 ease-in-out">New Recipe</NavLink>
      
      <NavLink to="/" className=" btn-round-red"><i className="fa-solid fa-martini-glass"></i></NavLink>
    </div>
  )
}

export default SignedInLinks
