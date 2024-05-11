import React from "react";
import Card from "./Card";
import { featuredCourses } from "../data";

const FeaturedCourse = () => {
  return (
    <section className="my-8">
      <div className="text-center">
        <h1 className="text-4xl text-blue-500 font-[500]">Featured Courses</h1>
        <p className="my-7 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          animi corporis ab. Voluptatem non tempora corporis nihil perferendis
          perspiciatis saepe.
        </p>
      </div>
      <div className="w-[80%] mx-[auto] grid grid-cols-4 gap-4">
      {
        featuredCourses.map((courses,index) => <Card {...courses} key={index}/> )
      }
      </div>
    </section>
  );
};

export default FeaturedCourse;
