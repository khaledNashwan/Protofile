import React from "react";
import prof from "../../assets/19362653-removebg.png";
import hand from "../../assets/hand.svg";
import Line from "../Model/Line";
import "./hero.css";
import HeaderSocials from "./HeaderSocials";
import Nav from "../Nav/Nav";


const Hero = () => {
  return (
    <>
      <section id="Home">
        <div className="flex justify-center items-center gap-12 max-lg:flex-col-reverse  mx-12  max-md:text-center">
          <div>
            <h1 className="font-extrabold flex items-center gap-4 text-3xl animate__animated animate__swing">
              Khaled Nashwan
              <img src={hand} alt="welcome" className="shake-lr" />
            </h1>
            <div className="flex justify-start items-center">
              <div>
                <Line />
              </div>
              <h1>Front End Developer</h1>
            </div>
            <p className="w-80 max-lg:text-center">
              I'm creative Front End developer based in GAZA, and I'm very
              passionate and dedicated to my work.
            </p>
            <div className="bg-green-600 rounded-xl py-4 w-32 text-white  px-2 mt-8 box  kkk max-md:relative max-lg:left-20 ">
              <a
                className="text-xl text-center"
                href="https://wa.me/+970597948137"
                target="blank"
              >
                Let's Talk <i class="uil uil-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="">
            <img className="img_anmi max-md:w-96" src={prof} alt="profile" />
          </div>
        </div>
        <div className="absolute left-10 top-56 max-md:left-6 max-md:top-32 ">
          <HeaderSocials />
        </div>
        <a
          href="#contact"
          className="rotate-90 flex gap-2 absolute right-10 top-72 max-md:right-0  max-md:top-48"
        >
          Scroll <span>down</span>
        </a>
      </section>
      <Nav />
    </>
  );
};

export default Hero;
