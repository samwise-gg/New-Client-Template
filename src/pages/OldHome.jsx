import React from "react";
import bg from "../assets/GG_2_starsBG2.gif";

const Home = () => {
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      {/* Background GIF */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed -z-20'
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Filter overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#031983] to-[#00010e] opacity-70 bg-fixed -z-10'></div>

      {/* Page Content */}
      <div className='relative z-0 h-full w-full'>
        <div className='text-white text-center pt-20'>Home Page</div>
      </div>
    </div>
  );
};

export default Home;
