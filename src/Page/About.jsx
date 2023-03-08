import React from "react";
import AboutText from "../components/Model/AboutText";
import Boxs from "../components/Model/Boxs";
import Button from "../components/Model/Button";
import Img from "../components/Model/Img";
import SectionHeader from "../components/Model/SectionHeader";


const About = () => {
  return (
    <section
      className="max-md:h-auto max-lg:mb-32  section_About"
      id="About"
    >
      <SectionHeader sectionHeader="About" />
      <div className="flex justify-center gap-12 max-lg:flex-col items-center container mx-auto">
        <Img />
        <div className="flex flex-col gap-8">
          <Boxs />

          <AboutText />

          <Button buttonName="Download CV">
            <i class="uil uil-file text-xl"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
