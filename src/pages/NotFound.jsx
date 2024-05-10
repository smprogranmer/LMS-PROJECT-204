import React from "react";
import { Link, NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-7xl font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink
            to="/"
            className="cursor-pointer font-semibold overflow-hidden relative z-100  group px-8 py-2"
          >
            <span class="relative z-10 text-blue-400 group-hover:text-white text-lg duration-500">
              Go back to  home
            </span>
            <span class="absolute w-full h-full bg-blue-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span class="absolute w-full h-full bg-blue-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
          </NavLink>
          <NavLink className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
