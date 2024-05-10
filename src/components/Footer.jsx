import React from "react";
import { footerMenus, footerPrimery } from "../data";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-7">
      <div className=" grid grid-cols-4 gap-4 w-[92%] mx-[auto]">
        <div className="">
          <a href="" className="logo"></a>
          <p  className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            animi.
          </p>
          <div className="input">
            <input type="email" name="" placeholder="asyr@gmail.com" id="" />
          </div>
        </div>
        <div className="footer_2">
          <h1 className="text-xl uppercase text-blue-500">menus</h1>
          <ul>
            {footerMenus.map(({ name, path }, index) => (
              <li className="my-2 relative text-xl" key={index}>
                <NavLink className='text-white' to={path}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_3">
          <h1 className="text-xl uppercase text-blue-500">primary</h1>
          <ul>
            {footerPrimery.map(({ name, path }, index) => (
              <li className="my-2 relative text-xl" key={index}>
                <NavLink className='text-white' to={path}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_4">
          <h4 className="text-xl uppercase text-blue-500 mb-3">contact us</h4>

          <ul>
            <li>
              <NavLink className='text-white block mb-2'  to="">01525664646</NavLink>
            </li>
            <li>
              <NavLink className='text-white'  to="">abc@gmail.com</NavLink>
            </li>
          </ul>
          <div className="icons"></div>
        </div>
      </div>
      <div className="copyright">
        <p>copyright@s.mprogrammer788@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
