import React from 'react'

const Contact_Mes_Title = (props) => {

    const {title} = props;

  return (
    <h1 className='font-semibold text-zinc-800'>{title}<span className='text-orange-700'>*</span> </h1>
  )
}

export default Contact_Mes_Title
