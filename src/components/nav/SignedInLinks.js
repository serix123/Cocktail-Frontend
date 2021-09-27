import React from 'react';
import { NavLink } from "react-router-dom";

function SignedInLinks() {
  return (
    <div className="font-body font-semibold ">
      <NavLink to="/" className="inline-block align-baseline text-lg mr-2 px-4 py-2 leading-none border rounded-full text-red-500 border-red-500  hover:text-white hover:bg-red-500 mt-4 lg:mt-0 transition duration-300 ease-in-out">New Recipe</NavLink>
      <NavLink to="/" className="inline-block align-baseline text-lg mr-2 px-4 py-2 leading-none border rounded-full text-white border-red-500 bg-red-500 hover:border-transparent hover:bg-red-600 mt-4 lg:mt-0 transition duration-300 ease-in-out">Log Out</NavLink>
      <NavLink to="/" className=" inline-block align-baseline "><button className=" px-4 py-3 text-sm border rounded-full bg-red-500 text-white hover:border-transparent hover:bg-red-600 mt-4 lg:mt-0 transition duration-300 ease-in-out"><i class="fa-solid fa-martini-glass"></i></button></NavLink>
    </div>
  )
}

export default SignedInLinks
