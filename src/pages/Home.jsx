import React from 'react';
import '../components/Home/home.css';
import Home_main from '../components/Home/Home_main';
import Home_about from '../components/Home/Home_about';
import Home_Exp from '../components/Home/Home_Exp';
import Home_Services from '../components/Home/Home_Services';
import Home_Gallery from '../components/Home/Home_Gallery';
import Home_Rooms from '../components/Home/Home_Rooms';

const Home = () => {
  return (
    <>
    <div className='w-full h-screen hero relative flex flex-col justify-center'>
      <div className='absolute bg-black w-full h-screen opacity-70'></div>
      <Home_main />
    </div>
      <Home_about/>
      <Home_Exp/>
      <Home_Rooms/>
      <Home_Services/>
      <Home_Gallery/>
    </>
  );
};

export default Home;
