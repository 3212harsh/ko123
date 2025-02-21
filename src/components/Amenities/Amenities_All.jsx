import React from 'react'
import { FaBed , FaWifi , FaTv } from "react-icons/fa";
import { IoLogoNoSmoking } from "react-icons/io";
import Amenities_Each from './Amenities_Each';

const Amenities_All = () => {
    const data = [
        {
            title:"Deluxe Room",
            img:"https://websitedemos.net/budget-hotel-04/wp-content/uploads/sites/822/2021/04/budget-hotel-rooms-img-2.jpg",
            subtitle:"Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
            services:[
                {
                    name:"1 King Bed",
                    icon:<FaBed />
                },
                {
                    name:"Free wifi",
                    icon:<FaWifi/>
                },
                {
                    name:"TV",
                    icon:<FaTv/>
                },
                {
                    name:"Smoke Free",
                    icon:<IoLogoNoSmoking/>
                }
            ]
        },
        {
            title:"Executive Room",
            img:"https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/125/2021/08/11060441/deluxe_harbour_web.jpg",
            subtitle:"Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
            services:[
                {
                    name:"1 King Bed",
                    icon:<FaBed />
                },
                {
                    name:"Free wifi",
                    icon:<FaWifi/>
                },
                {
                    name:"TV",
                    icon:<FaTv/>
                },
                {
                    name:"Smoke Free",
                    icon:<IoLogoNoSmoking/>
                }
            ]
        },
        {
            title:"Royal Suite",
            img:"https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png",
            subtitle:"Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
            services:[
                {
                    name:"1 King Bed",
                    icon:<FaBed />
                },
                {
                    name:"Free wifi",
                    icon:<FaWifi/>
                },
                {
                    name:"TV",
                    icon:<FaTv/>
                },
                {
                    name:"Smoke Free",
                    icon:<IoLogoNoSmoking/>
                }
            ]
        },
        {
            title:"Banquet Hall",
            img:"https://www.metropolbanquet.com/wp-content/uploads/renaissance-banquet-hall-grand-ballroom-new.jpg",
            subtitle:"Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
            services:[
                {
                    name:"1 King Bed",
                    icon:<FaBed />
                },
                {
                    name:"Free wifi",
                    icon:<FaWifi/>
                },
                {
                    name:"TV",
                    icon:<FaTv/>
                },
                {
                    name:"Smoke Free",
                    icon:<IoLogoNoSmoking/>
                }
            ]
        },
        {
            title:"Roof Top",
            img:"https://www.worldhotels.com/content/dam/worldhotels/experiences/2-rooftop-50773136967.jpg",
            subtitle:"Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
            services:[
                {
                    name:"1 King Bed",
                    icon:<FaBed />
                },
                {
                    name:"Free wifi",
                    icon:<FaWifi/>
                },
                {
                    name:"TV",
                    icon:<FaTv/>
                },
                {
                    name:"Smoke Free",
                    icon:<IoLogoNoSmoking/>
                }
            ]
        },
        {
            title:"Single Room",
            img:"https://websitedemos.net/budget-hotel-04/wp-content/uploads/sites/822/2021/04/budget-hotel-rooms-img-2.jpg",
            subtitle:"Tempus mattis posuere urna condimentum metus leo adipiscing risus tristique lobortis gravida venenatis a metus.",
            services:[
                {
                    name:"1 King Bed",
                    icon:<FaBed />
                },
                {
                    name:"Free wifi",
                    icon:<FaWifi/>
                },
                {
                    name:"TV",
                    icon:<FaTv/>
                },
                {
                    name:"Smoke Free",
                    icon:<IoLogoNoSmoking/>
                }
            ]
        }

    ]
  return (
    <div className='flex flex-wrap items-center justify-between md:px-40 gap-10'>
      {data.map((e,i)=>(<Amenities_Each title={e.title} subtitle={e.subtitle} img={e.img} services={e.services} />))}
    </div>
  )
}

export default Amenities_All
