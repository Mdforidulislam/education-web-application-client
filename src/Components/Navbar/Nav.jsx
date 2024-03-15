import { useState } from "react";
import { GrNotification } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const dropDownLinks = (
    <>
      <NavLink>
        <button className="py-2 hover:text-white hover:bg-[#3D5EE1] w-full text-center">Dashboard</button>
      </NavLink>
      <br />
      <NavLink>
        <button className="py-2 hover:text-white hover:bg-[#3D5EE1] w-full text-center">Profile</button>
      </NavLink>
      <br />
      <NavLink>
        <button className="py-2 hover:text-white hover:bg-[#3D5EE1] w-full text-center">Settings</button>
      </NavLink>
      <br />
      <button className="py-2  w-full text-center hover:bg-red-500 hover:text-white">Log Out</button> <br />
    </>
  );

  const links = (
    <>
      <NavLink to={'/'}>
        <button className="text-xl ">Home</button>
      </NavLink>
      <NavLink to={'/about'}>
        <button className="text-xl ">About</button>
      </NavLink>
      <NavLink to={'/contact'}>
        <button className="text-xl ">Contact</button>
      </NavLink>
      <NavLink to={'/register'}>
        <button className="text-xl flex items-center gap-2">Sign Up</button>
      </NavLink>
      <NavLink to={'/login'}>
        <button className="text-xl flex items-center gap-2">Log In</button>
      </NavLink>
      <GrNotification className="text-2xl text-[#3D5EE1] cursor-pointer" />
      <NavLink>
        <img
          onClick={() => setDropDownOpen(!dropDownOpen)}
          className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://i.ibb.co/nLQ8Nnc/3177440.png"
          alt="Bordered avatar"
        />
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="bg-opacity-40 shadow py-3">
        <div className="flex justify-between max-w-screen-xl items-center mx-auto">
          {/* Logo */}
          <div className="text-xl flex items-center">
            <h3 className="hidden md:flex font-semibold">
              Edu<span className="text-[#3D5EE1]">Care</span>
            </h3>
          </div>
          {/* Routes */}
          <div className="flex gap-6 items-center">{links}</div>
        </div>
      </div>
      {
        dropDownOpen ? <div className="absolute right-0 z-10 bg-[#C5D5E1] w-[120px] md:w-[150px]">
        {dropDownLinks}
      </div>: ''
      }
    </div>
  );
};

export default Nav;
