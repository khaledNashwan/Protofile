import React from 'react'
import SectionHeader from '../components/SectionHeader';
import Skill from '../components/Skill';

const Skills = () => {
    return (
      <section id="skills">
        <SectionHeader sectionHeader="Skills" />
        <div className="bg-slate-100 mx-auto flex flex-col  gap-4 items-center w-1/3 container rounded-xl">
          <h1 className="text-black p-2">Front End developer</h1>
          <div className="flex justify-center items-center gap-x-32 flex-wrap mb-4 ">
            <Skill Head="HTML" paragraph="Expert" />
            <Skill Head="CSS" paragraph="Expert" />
            <Skill Head="Java Script" paragraph="Middle" />
            <Skill Head="REACT" paragraph="Middle" />
          </div>
        </div>
      </section>
    );
}

export default Skills