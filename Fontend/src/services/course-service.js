import { myAxios } from "./helper";

export const searchCourse = async (course) => {
  const res = await myAxios.get(`/search-course/${course}`);
  return res;
};

export const courses = async () => {
  const res = await myAxios.get("/courses");
  return res;
};

export const courseDetails = async (courseId) => {
  const res = await myAxios.get(`/course-details/${courseId}`);
  return res;
};

export const purchaseCourse = async (courseId) => {
  const res = await myAxios.put(`/purchase-course/${courseId}`);
  return res;
};

export const myCourses = async () => {
  const res = await myAxios.get("/my-courses");
  return res;
};
