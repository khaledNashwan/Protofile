import React from 'react'

const SectionHeader = ({ sectionHeader }) => {
  return (
    <h1 className="main-title text-center font-bold text-4xl mb-12">
      {sectionHeader}
    </h1>
  );
};

export default SectionHeader