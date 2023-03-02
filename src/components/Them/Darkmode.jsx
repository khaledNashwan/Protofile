import React, {  useEffect, useState } from 'react'
import './Darkmode.css'



const Darkmode = () =>
{
  function getDefaultMode() {
    const savedMode = localStorage.getItem("theme");
    return savedMode ? savedMode : "light";
  }

  const [theme, setTheme] = useState(getDefaultMode());

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <button className='bg-transparent' onClick={toggleTheme}>
      {theme === "light" ? (
        <div className="Moon">
          <i class="uil uil-moon"></i>
        </div>
      ) : (
        <div className="Sun">
          <i class="uil uil-sun"></i>
        </div>
      )}
    </button>
  );
};

export default Darkmode

