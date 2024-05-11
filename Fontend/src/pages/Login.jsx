import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen dark">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
          <form action="" className="flex flex-col">
            <input
              type="email"
              name=""
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id=""
            />
            <input
              type="password"
              name=""
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id=""
            />
            <div class="flex items-center justify-between flex-wrap">
              <label
                class="text-sm text-gray-200 cursor-pointer"
                for="remember-me"
              >
                <input class="mr-2" id="remember-me" type="checkbox" />
                Remember me
              </label>
              <NavLink to="/singup" className="text-sm text-blue-500 hover:underline mb-0.5" href="#">
                Forgot password?
              </NavLink>
              <p className="text-white mt-4">
                {" "}
                Don't have an account?{" "}
                <NavLink to="/singup"
                  className="text-sm text-blue-500 -200 hover:underline mt-4"
                  href="#"
                >
                  Signup
                </NavLink>
              </p>
            </div>
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
