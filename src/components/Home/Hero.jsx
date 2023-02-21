import React from "react";
import prof from "../../assets/how-removeb.png";
import hand from "../../assets/hand.svg";
import Line from "../Line";
import "./hero.css";
import HeaderSocials from "./HeaderSocials";
import Nav from "../Nav/Nav";

const Hero = () => {
  return (
    <>
      <section id="Home">
        <div className="flex justify-center items-center gap-12   mx-12 ">
          <div>
            <h1 className="font-extrabold flex items-center gap-4 text-3xl">
              Khaled Nashwan
              <img src={hand} alt="welcome" />
            </h1>
            <div className="flex justify-start items-center">
              <div>
                <Line />
              </div>
              <h1>Front End Developer</h1>
            </div>
            <p className="w-80">
              I'm creative Front End developer based in GAZA, and I'm very
              passionate and dedicated to my work.
            </p>
            <div className="bg-green-600 rounded-xl py-4 w-32  px-2 mt-8 box  kkk ">
              <a href="https://wa.me/00970597948137" target="blank">
                <i class="uil uil-whatsapp"></i> whatsapp
              </a>
            </div>
          </div>
          <div className="w-96">
            <img className="hero__img shadow-md " src={prof} alt="profile" />
          </div>
        </div>
        <div className="absolute left-10 top-36">
          <HeaderSocials />
        </div>
        <a
          href="#contact"
          className="rotate-90 flex gap-2 absolute right-10 top-72"
        >
          Scroll <span>down</span>
        </a>
      </section>
      <Nav />
    </>
  );
};

export default Hero;
