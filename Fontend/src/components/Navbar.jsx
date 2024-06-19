import React from "react";
import { Link, NavLink } from "react-router-dom";
import { pages } from "../data";
import { AiFillShopping, AiOutlineSearch } from "react-icons/ai";

// import SearchBar from "./SearchBar";
import SearchBar from "./SearchBar";
import ProflieNavber from "./ProflieNavber";
const Navbar = () => {
  return (
    <nav className="flex sticky top-0  z-50 bg-white items-center justify-between container px-12 h-16 shadow-lg ">
      <Link className="text-2xl font-bold">LMS</Link>
      <ul className="flex">
        {pages.map(({ name, path }, index) => (
          <li className="mx-4 relative text-xl" key={index}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
      <div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <SearchBar />
          </div>
          <div>
            <ProflieNavber/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
