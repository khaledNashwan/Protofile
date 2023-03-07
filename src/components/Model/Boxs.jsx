import React from 'react'
import Box from './Box';

const Boxs = () => {
  return (
    <>
      <div className="flex gap-2 text-center max-md:flex-wrap max-md:gap-6 max-md:px-8">
        <Box icone="uil uil-award text-2xl" Expe="Experience" num="2 + Years" />
        <Box icone="uil uil-bag text-2xl" Expe="Completed" num="20 + Project" />
        <Box
          icone="uil uil-headphones text-2xl"
          Expe="Support"
          num="Online 24/7"
        />
      </div>
    </>
  )
}

export default Boxs