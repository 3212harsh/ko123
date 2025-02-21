import React from 'react'

const Home_Rooms_Each = (props) => {

    const {title,paragraph,image} = props;

  return (
    <div className="bg-white  p-4 rounded-lg">
        <img
        src={image}
        alt="Image 1"
        className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-3xl font-bold font-raleway mb-2">{title}</h2>
        <p className="text-gray-600 font-raleway font-md">{paragraph}</p>
    </div>

  )
}

export default Home_Rooms_Each
