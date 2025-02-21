import React from 'react'
import Amenities_Rev_Header from './Amenities_Rev_Header';
import Comments_Each from './Comments_Each';

const Amenities_Reviews = () => {

    const reviews = [
        {
          reviewerName: "Alice Johnson",
          review: "The hotel had stunning views, friendly staff, and excellent room service. Highly recommended!",
          img:"https://media.istockphoto.com/id/514581968/photo/mid-adult-man-smiling-in-studio.jpg?s=612x612&w=0&k=20&c=81ccgsY3ze5rqgwA90z7vz3vivlg6s2JjnB1ffK-pk0="
        },
        {
          reviewerName: "David Smith",
          review: "Spacious rooms, cozy ambiance, and delicious breakfast made our stay incredibly enjoyable.",
          img:"https://t4.ftcdn.net/jpg/02/07/26/47/360_F_207264725_F5GohNvyI9nu8HXxKVX4ti95x29x8WvD.jpg"
        },
        {
          reviewerName: "Sophia Lee",
          review: "Perfect location, clean rooms, great amenities, and wonderful service made it a great experience.",
          img:"https://pics.craiyon.com/2023-07-02/8bfbb1857f144fa186df559733e8d60e.webp"
        },
        {
          reviewerName: "Michael Brown",
          review: "Loved the rooftop pool, modern decor, and courteous staff. A truly memorable hotel stay!",
          img:"https://photos2.spareroom.co.uk/images/flatshare/listings/large/44/83/44831764.jpg"
        }
      ];
      

  return (
    <div className='flex flex-col min-h-screen md:px-40 mt-36'>
        <Amenities_Rev_Header/>
        <div className='flex flex-wrap gap-5'>
            {reviews.map((e,i)=>(<Comments_Each name={e.reviewerName} review={e.review} img={e.img} key={i} />))}
            {/* <Comments_Each/> <Comments_Each/> <Comments_Each/> <Comments_Each/> */}
            
        </div>
      
    </div>
  )
}

export default Amenities_Reviews
