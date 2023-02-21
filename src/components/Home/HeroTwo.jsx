
import React, { useState } from 'react'

const HeroTwo = () => {
  const [color, setColor] = useState(false);





  return (
    <>
      <div className="flex gap-2 bg-white rounded-3xl container w-max p-2 mx-8 my-8 border-2 shadow-md">
        <i
          onClick={() => setColor(!color)}
          class="uil uil-palette text-black text-2xl hover:rotate-180 "
        ></i>
        <div
          className={
            color === true
              ? "flex gap-4 items-center  transition-all"
              : "hidden"
          }
        >
          <button id="hero-btn1" onClick={()=>
   document.body.setAttribute("data-theme", "light-theme") }></button>

          <button
            id="hero-btn2"
            onClick={() =>
              document.body.setAttribute("data-theme", "dark-theme")
            }
          ></button>

          <button
            id="hero-btn3"
            onClick={() =>
              document.body.setAttribute("data-theme", "sea-theme")
            }
          ></button>

          <button
            id="hero-btn4"
            onClick={() =>
              document.body.setAttribute("data-theme", "sharp-theme")
            }
          ></button>

          <button
            id="hero-btn5"
            onClick={() =>
              document.body.setAttribute("data-theme", "green-theme")
            }
          ></button>
        </div>
      </div>
    </>
  );
}

export default HeroTwo


  