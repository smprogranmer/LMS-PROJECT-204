import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import LogOutPopUp from "./LogOutPopUp";
const ProflieNavber = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const loginHandler = () => {
    console.log("Login")
    const token = localStorage.getItem("token");
    if (token) {
      setOpen(!open);
    }else{
        console.log("Login")
        navigate("/login")
    }
  };

  const LogOutPopUpHandler =() =>{
    setPopUp(!popUp)
    setOpen(!open)
  }
  return (
    <>
      <div className="px-2 text-2xl cursor-pointer" onClick={loginHandler}>
        <MdAccountCircle />
      </div>
      {open && (
        <div className="absolute top-20 right-12 bg-white shadow-lg w-49 h-32 flex flex-col  ">
          <NavLink
            className="py-2 px-4 border-b-4 hover:bg-slate-300"
            to="/my-courses"
            onClick={() => setOpen(!open)}
          >
            MyCourses
          </NavLink>
          <NavLink
            className="py-2 px-4 border-b-4 hover:bg-slate-300"
            to="/forget-password"
            onClick={() => setOpen(!open)}
          >
            Forget Password
          </NavLink>
          <NavLink
            className="py-2 px-4 border-b-4 hover:bg-slate-300"
            
            onClick={LogOutPopUpHandler}
          >
            LogOut
          </NavLink>
        </div>
      )}
      {
        popUp && (
            <LogOutPopUp popUp={setPopUp}/>
        )
      }
    </>
  );
};

export default ProflieNavber;
