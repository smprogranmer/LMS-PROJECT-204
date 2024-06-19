import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { singUp } from "../services/user-service";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const SingUp = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log("🚀 ~ SingUp ~ register:", register);

  const onSubmit = (userData) => {
    console.log("🚀 ~ onSubmit ~ userData:", userData);
    singUp(userData).then((res) => {
      toast.success("Successfully registered")
      return navigate("/profile");
    }).catch((err) => toast.error("Error registering"));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-inputBgColor rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-black mb-4">Sign Up</h2>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-4 mb-4">
            <div className="w-[12rem]">
              <input
                placeholder="First Name"
                className={`bg-white text-gray-200 border-0 rounded-md
                 ${
              errors.firstName ? "border-red-500 border-2" : "focus:ring-blue-500"
            }  p-2 w-full  focus:outline-none focus:ring-1
                 focus:ring-blue-500 transition ease-in-out duration-150`}
                type="text"
                {...register("firstName", {
                  required: true,
                })}
              />
              {errors?.firstName && (
                <p className="text-white my-2">Password is required</p>
              )}
            </div>
            <div>
              <input
                placeholder="lastName"
                className={`bg-white text-gray-200 border-0 rounded-md
                 ${
                   errors.lastName
                     ? "border-red-500 border-2"
                     : "focus:ring-blue-500"
                 }  p-2 w-full focus:bg-gray-600 focus:outline-none focus:ring-1
                 focus:ring-blue-500 transition ease-in-out duration-150`}
                type="text"
                {...register("lastName", {
                  required: true,
                })}
              />
              {errors?.lastName && (
                <p className="text-white my-2">Password is required</p>
              )}
            </div>
          </div>
          <input
            type="phone"
            name="phone"
            placeholder="please enter your phone number"
            className={`bg-white text-gray-200  ${
              errors.phone ? "border-red-500 border-2" : "focus:ring-blue-500"
            } border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1  transition ease-in-out duration-150`}
            id=""
            {...register("phone", {
              required: true,
            })}
          />
          {errors?.phone && (
            <p className="text-white my-2">phone number is required</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="please enter your email address"
            className={`bg-white text-black  ${
              errors.email ? "border-red-500 border-2" : "focus:ring-blue-500"
            } border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1  transition ease-in-out duration-150`}
            id=""
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                  "Email address  must be a valid  address",
              },
            })}
          />
          {errors?.email && (
            <p className="text-white my-2">Password is required</p>
          )}
          <input
            type="password"
            name=""
            placeholder="Please enter your password"
            className={`bg-white text-black ${
              errors.email ? "border-red-500 border-2" : "focus:ring-blue-500"
            } border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1  transition ease-in-out duration-150`}
            id=""
            {...register("password", {
              required: true,
            })}
          />
          {errors?.password && (
            <p className="text-white my-2">Password is required</p>
          )}
          <label
            className="text-sm mb-2 text-black cursor-pointer"
            for="gender"
          >
            Gender
          </label>
          <select
            className="bg-white text-black border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="gender"
            {...register("gender", { required: true })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors?.gender && (
            <p className="text-white mb-2">Gender is required</p>
          )}
          <p className="text-black mt-4">
            Already have an account?
            <NavLink
              to="/login"
              className="text-sm text-blue-500 -200 hover:underline mt-4"
              href="#"
            >
              Login
            </NavLink>
          </p>
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
