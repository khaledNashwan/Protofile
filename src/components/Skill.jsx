import React from 'react'

const Skill = ({ paragraph, Head }) => {
  return (
    <div className="flex flex-col justify-center items-center w-32 ">
      <div className="text-black flex gap-2">
        <i class="uil uil-comment-verify text-black"></i>
        {Head}
      </div>
      <div className="text-gray-500">{paragraph}</div>
    </div>
  );
};

export default Skill