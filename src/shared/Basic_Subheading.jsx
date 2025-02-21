import React from 'react'

const Basic_Subheading = (props) => {
    const {subheading} = props
  return (
    <p className=' text-center lg:w-1/2 text-zinc-700 font-raleway mb-10'>
        {subheading}
    </p>
  )
}

export default Basic_Subheading
