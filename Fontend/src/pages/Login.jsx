import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../services/user-service";
import { toast } from "react-toastify";
// import { login } from "../services/user-service";
// import { login } from "../services/user-service";
const Login = () => {
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      navigate("/profile")
    }
  },[])
  const navigate = useNavigate();
  //How to use react-form-hock in login?
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (userData) => {
    // toast.success(userData,{position:"top-center"})
    login(userData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        return navigate("/");
      })
      .catch((error) =>
        toast.error(error?.response?.data?.message || "Something went wrong")
      );
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-[80vh]">
        <div className="w-full max-w-md bg-inputBgColor  rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            Login
          </h2>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <div>
              <input
                type="email"
                name=""
                placeholder="Please enter your email"
                className={` w-[100%] text-black ${
                  errors.email
                    ? "border-red-500 border-2"
                    : "focus:ring-blue-500"
                } border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1  transition ease-in-out duration-150`}
                id=""
                {...register("email", {
                  required: true,
                })}
              />
              {errors?.email && (
                <p className="text-black mb-2">Email is required.</p>
              )}
              <input
                type="password"
                name=""
                placeholder="Please enter your new password"
                className={` w-[100%] text-black ${
                  errors.password
                    ? "border-red-500 border-2"
                    : "focus:ring-blue-500"
                } border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1  transition ease-in-out duration-150`}
                id=""
                {...register("password", {
                  required: true,
                })}
              />
              {errors?.password && (
                <p className="text-red mb-2">new Password is required.</p>
              )}
            </div>

            <div className="flex items-center justify-between flex-wrap">
              <label
                className="text-sm text-black cursor-pointer"
                for="remember-me"
              >
                <input className="mr-2" id="remember-me" type="checkbox" />
                Remember me
              </label>
              <NavLink
                to="/singup"
                className="text-sm text-blue-500 hover:underline mb-0.5"
                href="#"
              >
                Forgot password?
              </NavLink>
              <p className="text-black mt-4">
                {" "}
                Don't have an account?{" "}
                <NavLink
                  to="/singUp"
                  className="text-sm text-blue-500 -200 hover:underline mt-4"
                  href="#"
                >
                  SignUp
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
