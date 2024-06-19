import React, { useEffect, useState } from "react";
import Card from "./Card";
import { featuredCourses } from "../data";
import { courses } from "../services/course-service";

const FeaturedCourse = () => {
  const [Courses, setCourse] = useState([])
  useEffect(() => {
    courses()
        .then(({data :{result}}) => {
            setCourse(result.slice(0,3))
            console.log("🚀 ~ Courses ~ Course:", result.slice(0, 3))
        })
        .catch((err) => console.log(err))
}, [])
  
  
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
      <div className="w-[80%] mx-[auto] grid grid-cols-3 gap-4">
      {
        Courses.map((courses,index) => <Card {...courses} key={index}/> )
      }
      </div>
    </section>
  );
};

export default FeaturedCourse;
