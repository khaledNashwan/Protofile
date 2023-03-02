import React from 'react'


const Pro = ({ img, aaa, desc }) => {
  return (
    <>
      <div className="max-w-lg shadow-2xl rounded-xl  bg-black proje">
        <img src={img} alt="" className="p-6 w-full  " />
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




