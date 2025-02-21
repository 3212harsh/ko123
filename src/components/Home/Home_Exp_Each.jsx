import React from 'react'

const Home_Exp_Each = (props) => {
    const {value,title,key} = props;
  return (
    <div className='flex flex-col items-center font-semibold font-poppins' key={key}>
        <h1 className='md:text-[60px] text-[50px]'>{value}</h1>
        <p className='md:text-md text-sm'>{title}</p>
    </div>
  )
}

export default Home_Exp_Each
