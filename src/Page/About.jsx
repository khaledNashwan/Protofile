import React from "react";
import profile from "../assets/me.jpg";
import Button from "../components/Model/Button";
import SectionHeader from "../components/Model/SectionHeader";

const About = () => {
  return (
    <section className="max-md:h-auto max-lg:mb-32" id="About">
      <SectionHeader sectionHeader="About" />
      <div className="flex justify-center gap-12 max-lg:flex-col items-center container mx-auto">
        <div>
          <img
            src={profile}
            alt="profile"
            className="h-96 object-contain rounded-xl hover:grayscale hover:transition-colors max-lg:w-auto"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex gap-2 text-center max-md:flex-wrap max-md:gap-6 max-md:px-8">
            <div className="flex flex-col gap-2 bg-slate-50 rounded-xl w-32 text-black p-4 shadow-md hover:-translate-y-4 transition-all ">
              <i class="uil uil-award text-2xl"></i>
              <h1>Experience</h1>
              <p className="text-gray-500 text-xs">2 + Years</p>
            </div>

            <div className="flex flex-col gap-2 bg-slate-50 rounded-xl w-32 text-black p-4 shadow-md hover:-translate-y-4 transition-all ">
              <i class="uil uil-bag text-2xl"></i>
              <h1>Completed</h1>
              <p className="text-gray-500 text-xs">20 + Project</p>
            </div>

            <div className="flex flex-col gap-2 bg-slate-50 rounded-xl text-black p-4 w-32 shadow-md hover:-translate-y-4 transition-all ">
              <i class="uil uil-headphones text-2xl"></i>
              <h1>Support</h1>
              <p className="text-gray-500 text-xs">Online 24/7</p>
            </div>
          </div>
          <p className="w-96 max-md:w-auto max-md:px-8">
            Frontend developer, I create web pages , I have years of experience
            and many clients are happy with the projects carried out.
          </p>
          <Button buttonName="Download CV">
            <i class="uil uil-file text-xl"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
