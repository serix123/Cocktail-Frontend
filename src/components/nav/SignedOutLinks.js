import React from 'react';
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
  return (
    <div className="font-body font-semibold ">
      <NavLink to="/SignIn" className="inline-block align-baseline text-lg mr-2 px-4 py-2 leading-none border rounded-full text-red-500 border-red-500  hover:text-white hover:bg-red-500 mt-4 lg:mt-0 transition duration-300 ease-in-out">Log In</NavLink>
      <NavLink to="/SignUp" className="inline-block align-baseline text-lg px-4 py-2 leading-none border rounded-full text-white border-red-500 bg-red-500 hover:border-transparent hover:bg-red-600 mt-4 lg:mt-0 transition duration-300 ease-in-out">Register</NavLink>
    </div>
  )
}

export default SignedOutLinks
