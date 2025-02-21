import React from 'react'
import Home_Exp_Each from './Home_Exp_Each'

const Home_Exp = () => {

    const data = [
        {
            value:"8",
            title:"YEARS OF SERVICE"
        },
        {
            value:"320",
            title:"SQ. METER AREA"
        },
        {
            value:"40",
            title:"NICE ROOMS"
        },
        {
            value:"4567",
            title:"HAPPY VISITORS"
        },
    ]

  return (
    <div className='flex justify-between flex-wrap items-center text-zinc-600 lg:px-56 px-10 mb-10 space-y-5'>
        {data.map((e,i)=><Home_Exp_Each value={e.value} title={e.title} key={i} />)}
    </div>
  )
}

export default Home_Exp
