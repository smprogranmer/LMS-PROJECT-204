import React from "react";
import { Link, NavLink } from "react-router-dom";
import { pages } from "../data";
import { AiFillShopping, AiOutlineSearch } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container px-12 h-16 shadow-lg ">
      <Link className="text-2xl font-bold">LMS</Link>
      <ul className="flex">
        {pages.map(({name,path},index) => <li className="mx-4 relative text-xl" key={index}><NavLink to={path}>{name}</NavLink></li>)}
      </ul>
      <div>
      <div className="flex item-center">

          <NavLink to="/cart" className="px-2 text-2xl">
          <AiOutlineSearch />
          </NavLink>
          <NavLink to="/cart" className="px-2 text-2xl">
            <AiFillShopping />
          </NavLink>
          <NavLink to="/profile" className="px-2 text-2xl">
            <MdAccountCircle />
          </NavLink>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
