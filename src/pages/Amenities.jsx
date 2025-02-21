import React from 'react'
import Main_template from '../shared/Main_template'
import Amenities_H_Info from '../components/Amenities/Amenities_H_Info'
import Amenities_All from '../components/Amenities/Amenities_All'
import Amenities_Reviews from '../components/Amenities/Amenities_Reviews'

const Amenities = () => {
  return (
    <div className='bg-zinc-100'>
      <Main_template heading="Amenities" subheading="Enjoy world-class amenities designed for relaxation and comfort, including spa services, fitness centers, pools, and gourmet dining experiences." img="https://i.pinimg.com/564x/7e/bf/5b/7ebf5bef51a9f00403b8c72d7f6cf58b.jpg" />
      <Amenities_H_Info/>
      <Amenities_All/>
      <Amenities_Reviews/>
    </div>
  )
}

export default Amenities
