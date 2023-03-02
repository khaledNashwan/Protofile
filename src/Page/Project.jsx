import React from "react";
import Pro from "../components/Model/Pro";
import SectionHeader from "../components/Model/SectionHeader";
import phote1 from '../assets/Capture.PNG'
import phote2 from "../assets/Capture2.PNG";
import phote3 from "../assets/Capture3.PNG";
import phote4 from "../assets/Capture4.PNG";
import phote5 from "../assets/Screenshot.jpg";
import phote6 from "../assets/vewu.jpg";




const Project = () => {
  return (
    <div className="proj" id="Project">
      <SectionHeader sectionHeader="Project" />
      <div className="container px-5 py-24 mx-auto flex justify-center gap-6 max-lg:gap-16 flex-wrap">
        <Pro
          img={phote1}
          aaa="https://melodic-peony-69640d.netlify.app/"
          desc="React Project with context hook"
        />
        <Pro
          img={phote2}
          aaa="https://velvety-trifle-17ede9.netlify.app/"
          desc="landing page with responsive design"
        />
        <Pro
          img={phote3}
          aaa="https://splendorous-mochi-d802b6.netlify.app/"
          desc="landing page with responsive design and tailwindcss "
        />
        <Pro img={phote4} />
        <Pro
          img={phote5}
          aaa="https://khalednashwan.netlify.app/"
          desc="React Project with redex toolkit"
        />
        <Pro
          img={phote6}
          aaa="https://khaledwebsite2.netlify.app/"
          desc="landing page with responsive design "
        />
      </div>
    </div>
  );
};

export default Project;
