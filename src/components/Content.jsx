import React from 'react'

const Content = ({ phote }) => {
  return (
    <>
      <div className="w-5/12 h-64 bg-slate-300 p-4 rounded-xl flex justify-center items-center ">
        <img src={phote} alt="" className="rounded-xl w-full relative h-max" />
      </div>
    </>  );
};

export default Content