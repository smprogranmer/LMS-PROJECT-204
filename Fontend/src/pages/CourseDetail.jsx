import { FaStar } from "react-icons/fa6";
import avatar from "../assets/2.jpg";
import image from "../assets/1.jpg";
import Review from "../components/accordion/Review";
import { useState } from "react";
import OverView from "../components/accordion/OverView";
import Instractor from "../components/accordion/Instractor";

const CourseDetail = () => {
  const sideBox = [1, 2, 3, 4];
  const [accordion, setAccordion] = useState("Overview");

  const handleClick = (value) =>
    value == "Review"
      ? setAccordion("Review")
      : value == "Overview"
      ? setAccordion("Overview")
      : setAccordion("Instructor");
  return (
    <>
      <div className="w-screen flex justify-between gap-4 h-full px-[5%] pt-5">
        <div>
          <img
            src={image}
            alt=""
            className="w-full max-h-[80vh] object-cover object-center rounded-md"
          />
          <div className="grid grid-cols-4 gap-5 mt-8">
            <div className="w-full flex items-center justify-center gap-4 border-r border-slate-400/50">
              <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden">
                <img
                  src={avatar}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="">
                <h1 className="capitalize text-lg">instructor</h1>

                <span className="font-medium capitalize">Motasim Billah</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-center gap-4 border-r border-slate-400/50">
              <div className="">
                <h1 className="capitalize text-lg">category</h1>

                <span className="font-medium capitalize">Management</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center gap-4 border-r border-slate-400/50">
              <div className="">
                <h1 className="capitalize text-lg">last update</h1>

                <span className="font-medium capitalize">april 30,2024</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center ">
              <div className="">
                <h1 className="capitalize text-lg">ratings</h1>

                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500 text-lg" />
                  <FaStar className="text-yellow-500 text-lg" />
                  <FaStar className="text-yellow-500 text-lg" />
                  <FaStar className="text-yellow-500 text-lg" />
                  <FaStar className="text-yellow-500 text-lg" />
                  <span className="font-medium">5.0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl my-6 text-black font-700">
              Commerce subjects
            </h1>
            <button class="w-[150px] capitalize bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            purchase
            </button>
          </div>
          <div>
            <div className="flex justify-around bg-gray-300 mb-4">
              <p
                className="text-lg font-bold py-3 px-5 hover:bg-blue-500 cursor-pointer"
                onClick={() => handleClick("Overview")}
              >
                Overview
              </p>
              <p
                className="text-lg font-bold py-3 px-5 hover:bg-blue-500 cursor-pointer"
                onClick={() => handleClick("Review")}
              >
                Review
              </p>
              <p
                className="text-lg font-bold py-3 px-5 hover:bg-blue-500 cursor-pointer"
                onClick={() => handleClick("Instructor")}
              >
                Instructor
              </p>
            </div>
            <div className="w-[54.7rem]">
              {accordion == "Review" ? (
                <Review />
              ) : accordion == "Overview" ? (
                <OverView />
              ) : (
                <Instractor />
              )}
            </div>
          </div>
        </div>
        <div>
          {sideBox.map((index) => {
            return (
              <div
                key={index}
                class="max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
              >
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CourseDetail;
