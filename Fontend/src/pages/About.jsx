import React from "react";
import aboutImg from "../assets/aboutImg.png";
const About = () => {
  return (
    <section className="">\
    <h1 className="text-4xl text-blue-500 font-[500] text-center">About Us</h1>
      <div className="grid gap-3 w-[80%] mx-[auto] grid-cols-2 items-center my-24">
        <div>
          <img src={aboutImg} alt="" />
        </div>
        <div>
          <h1 className="text-6xl leading-tight">
            Over 10 Years{" "}
            <span className="text-blue-500"> In Teaching in Dhaka</span>
          </h1>
          <p className="text-lg my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            perferendis expedita velit aliquam debitis aperiam.
          </p>
          <div>
            <p className=" text-blue-500">Exper Trainers</p>
          </div>
          <div>
            <p className="mt-2 text-blue-500">Online Remote Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
