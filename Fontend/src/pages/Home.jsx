import React from "react";
import FeaturedCourse from "../components/FeaturedCourse";
import { Hero } from "../components/Hero";
import About from "./About";
import Trianers from "./Trianers";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <Hero />
      {/* featured section */}
      <FeaturedCourse />s
      {/* about us section  */}
      <About/>
      {/* trianers section  */}
      <Trianers/>
    </>
  );
};

export default Home;
