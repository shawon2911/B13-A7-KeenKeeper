import React from "react";
import { CiClock2 } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router";
import navLogo from "../../../assets/logo.png"

const Navbar = () => {

    const links = (
    <>
        <li>
            <NavLink
             to={"/"}
             className={({isActive})=> `font-semibold text-xl text-[#64748B] mr-1 ${isActive ? "bg-[#244D3F] text-white rounded-sm" : ""}`}>
                <IoHomeOutline />
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
             to={"/timeline"}
             className={({isActive})=> `font-semibold text-xl text-[#64748B] mr-1 ${isActive ? "bg-[#244D3F] text-white rounded-sm" : ""}`}>
                <CiClock2 />
                Timeline
            </NavLink>
        </li>
        <li>
            <NavLink
             to={"/stats"}
             className={({isActive})=> `font-semibold text-xl text-[#64748B] mr-1 ${isActive ? "bg-[#244D3F] text-white rounded-sm" : ""}`}>
                <TfiStatsUp />
                Stats
            </NavLink>
        </li>
    </>
    )



  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start lg:pl-20">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={navLogo} alt="" />
        </div>
        <div className="navbar-end hidden lg:flex lg:pr-20">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
