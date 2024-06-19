import React, { useEffect, useState } from "react";
import ProfileContainer from "../../components/ProfileContainer";
import { myCourses } from "../../services/user-service";
import { useNavigate } from "react-router-dom";
import CourseCard from "../../components/CourseCard";

const MyCourses = () => {
  const [myCourse, setMyCourse] = useState([]);
  useEffect(() => {
    myCourses()
      .then(({ data: { userCourses } }) => {
        console.log(userCourses);
        setMyCourse(userCourses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="grid grid-cols-3 gap-[5rem] p-8">
      {myCourse.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default MyCourses;
