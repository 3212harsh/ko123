import React from 'react'

const Basic_Heading = (props) => {
    const {title} = props;
  return (
    <h2 className="text-4xl font-bold text-center m-10 mt-20 mb-4  text-zinc-700 font-raleway">{title}</h2>
  )
}

export default Basic_Heading
