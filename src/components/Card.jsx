import React from "react";
import { featuredCourses } from "../data";

const Card = ({ img, title }) => {
  return (
    <div class="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-96 w-72  rounded-2xl hover:duration-700 duration-700">
      <div class="w-72 h-96 bg-blue-400 text-gray-800">
        <div class="flex flex-row justify-between">
        </div>
      </div>
      <div class="absolute bg-gray-50 -bottom-24 w-72 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span class="text-lime-400 font-bold text-xs">TAILWIND</span>
        <span class="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
        <p class="text-neutral-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Card;
