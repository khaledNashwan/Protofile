import React from 'react'


const Pro = ({ img, aaa, desc }) => {
  return (
    <>
      <div className="shadow-2xl rounded-xl proje   bg-slate-200 ">
        <img src={img} alt="" className="p-2 w-full h-full object-contain rounded-xl" />
        <div className="overlay">
          <div className="text">
            <p>{desc}</p>
            <a href={aaa} target="blank">
              demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pro




