import React from "react";
import HeroTwo from "./HeroTwo";

const HeaderSocials = () => {
  return (
    <div className="flex flex-col justify-start">
      <HeroTwo />
      <a
        className="relative left-12"
        href="https://www.linkedin.com"
        target="blank"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a className="relative left-12" href="https://github.com/" target="blank">
        <i class="uil uil-github"></i>
      </a>
      <a
        className="relative left-12"
        href="https://twitter.com/home"
        target="blank"
      >
        <i class="uil uil-twitter"></i>
      </a>
      <hr className="w-1 h-12 my-4 bg-gray-200 border-0 rounded dark:bg-white mx-4 relative left-10" />
    </div>
  );
};

export default HeaderSocials;
