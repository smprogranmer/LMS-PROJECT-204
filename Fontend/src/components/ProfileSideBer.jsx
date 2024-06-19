import React, { useState } from "react";
import { sideBarItems } from "../data";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../services/user-service";
import { toast } from "react-toastify";

const ProfileSideBer = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  /**
   * Renders a modal popup that asks the user for confirmation to log out.
   * @returns {JSX.Element} Modal popup component
   */


  return (
    <>
      <aside
        id="logo-sidebar"
        className="z-40 w-64 h-[80vh]  transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 w-full overflow-y-auto bg-blue-500">
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2.5 mb-5"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            {sideBarItems.map(({ name, path }, index) => (
              <li key={index}>
                {name === "Log Out" ? (
                  <button
                    onClick={() => setOpen(true)}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3">{name}</span>
                  </button>
                ) : (
                  <NavLink
                    to={path}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3">{name}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

        </div>
      </aside>
      {open && <LogOutPopup />}
    </>
  );
};
export default ProfileSideBer;
