import React from "react";
import SectionHeader from "../components/Model/SectionHeader";
import Skill from "../components/Model/Skill";

const Skills = () => {
  return (
    <div id="skills">
      <SectionHeader sectionHeader="Skills" />
      <div class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <Skill num="1" name="HTML" stage="Expert" icone="uil uil-html5" />
          <Skill num="2" name="CSS" stage="Me" icone="uil uil-css3-simple" />
          <Skill
            num="3"
            name="JavaScript"
            stage="Expert"
            icone="uil uil-java-script"
          />
          <Skill
            num="4"
            name="responsive design"
            stage="Expert"
            icone="uil uil-html5"
          />
          <Skill num="5" name="React" stage="Expert" icone="uil uil-react" />
          <Skill
            num="6"
            name="tailwind css"
            stage="Expert"
            icone="uil uil-html5"
          />
          <Skill
            num="7"
            name="bootstrap"
            stage="Expert"
            icone="uil uil-html5"
          />
          <Skill
            num="8"
            name="git & github"
            stage="Expert"
            icone="uil uil-github"
          />
          <Skill num="9" name="redex" stage="Expert" icone="uil uil-html5" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
