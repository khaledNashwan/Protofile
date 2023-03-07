import React, { useState } from "react";
import Darkmode from "../Them/Darkmode";


const HeaderSocials = () => {
  const [color, setcolor] = useState(false);
   
  const toggleColor = () => { 
    setcolor(!color);
  }
  return (
    <div className="flex flex-col justify-center">
      <div onClick={toggleColor}>
        <Darkmode />
      </div>
      <a href="https://www.linkedin.com" target="blank">
        <i class="uil uil-linkedin"></i>
      </a>
      <a href="https://github.com/khaledNashwan" target="blank">
        <i class="uil uil-github"></i>
      </a>
      <a href="https://twitter.com/home" target="blank">
        <i class="uil uil-twitter"></i>
      </a>
      <hr
        className={
          color
            ? "w-1 h-12 my-4  border-0 rounded  ml-1 bg-white"
            : "w-1 h-12 my-4  border-0 rounded  ml-1 bg-black"
        }
      />
    </div>
  );
};

export default HeaderSocials;
