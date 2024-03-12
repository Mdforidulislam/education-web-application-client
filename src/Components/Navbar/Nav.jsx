import React from "react";
import { NavLink } from "react-router-dom";
const links = (
  <>
    <NavLink>
      <button className="text-xl ">Home</button>
    </NavLink>
    <NavLink>
      <button className="text-xl ">About Us</button>
    </NavLink>
    <NavLink>
      <button className="text-xl ">Contact Us</button>
    </NavLink>
    <NavLink>
      <button className="text-xl flex items-center gap-2">Sign Up</button>
    </NavLink>
    <NavLink>
      <button className="text-xl flex items-center gap-2">Log In</button>
    </NavLink>
    <NavLink>
      <img
        className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        src="https://i.postimg.cc/7hkMR1VW/empty-face-icon-avatar-with-black-hair-vector-illustration-601298-13402-removebg-preview.png"
        alt="Bordered avatar"
      />
    </NavLink>
    {/* <button>Logout</button> */}
  </>
);
const Nav = () => {
  return (
    <div>
      <div className="bg-opacity-40 shadow py-2">
        <div className="flex justify-between max-w-screen-xl items-center mx-auto">
          {/* Logo */}
          <div className="text-xl flex items-center">
            <img className="w-16" src="" alt="Logo" />{" "}
            <h3 className="hidden md:flex font-semibold">
              Our<span className="text-red-400">School</span>
            </h3>
          </div>
          {/* Routes */}
          <div className="flex gap-6 items-center">{links}</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
