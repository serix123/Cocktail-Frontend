import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/pics/logo2.svg';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

export default function Navbar() {

  const [clicked, setClicked] = useState(false)
  
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(clicked);
    setClicked(!clicked)
  }

  return (
    <nav className="fixed w-full flex items-center justify-between flex-wrap bg-white py-4 px-4 xl:px-52 shadow-lg z-50 ">
      <div className="flex items-center flex-shrink-0 text-red-500 md:mr-12 ">
        {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
        <NavLink to="/"><Logo className="fill-current h-14  mr-2" /></NavLink>
        {/* <span className="font-main font-bold text-4xl tracking-tight">
          <NavLink to="/"><i class="fa-solid fa-martini-glass-citrus"></i>The High Ball</NavLink>
        </span> */}
      </div>
      <div className="block lg:hidden">
        <button onClick={handleSubmit} className="flex items-center px-3 py-2 border-2 rounded-md text-red-400 hover:text-red-500 border-red-400 hover:border-red-500">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className={`w-full ${clicked ? "block":"hidden"} flex-grow lg:flex lg:items-center lg:w-auto `}>
        <div className="font-body text-md lg:flex-grow">
          <NavLink to="/Browse" className="relative block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-600 mr-4">
            <div className="nav-link">Browse</div>
            
          </NavLink>
          <NavLink to="/Create" className="relative block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-600 mr-4">
            <div className="nav-link">Create</div>
            
          </NavLink>
          <NavLink to="/About" className="relative block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-600">
            <div className="nav-link">About</div>
          </NavLink>
        </div>
        {isLoggedIn ? <SignedInLinks/> : <SignedOutLinks/> }
        
      </div>
    </nav>
  )
}

