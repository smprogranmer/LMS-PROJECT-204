import React from "react";
import { useNavigate } from "react-router-dom";
const CourseCard = ({course}) => {
  console.log("🚀 ~ CourseCard ~ course:", course.name, course.courseImage)
  const navigate = useNavigate();
  const handleExploreClick = (courseId) => {
    navigate(`/course-details/${courseId}`);
  };

  return (
    <div
      className="group flex flex-col justify-start items-start gap-2 h-[13.5rem] duration-500 relative rounded-lg p-4 bg-inputBgColor hover:-translate-y-2 hover:shadow-xl shadow-gray-300"
    >
      <div
        className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-btnOne"
        alt="image here"
      >
        <img src={course.courseImage} alt="" />
      </div>
      <div>
        <h2 className="text-2xl capitalize font-bold mb-2 text-gray-800">{course.name}</h2>
        <p className="text-gray-700 line-clamp-3">{course.description}</p>
      </div>
      <button
        className="hover:bg-btnOneHoverColor b text-gray-800 mt-6 rounded bg-btnOne p-2 px-6"
        onClick={() => handleExploreClick(course._id)}
      >
        Explore
      </button>
    </div>
  );
};

export default CourseCard;
