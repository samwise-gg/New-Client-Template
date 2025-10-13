import React, { useEffect, useState } from "react";
import bg from "../assets/GG_2_starsBG3.gif";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-controlled zoom and filter opacity
  const maxZoom = 3.5;
  const scrollLimit = 500;
  const scrollRatio = Math.min(scrollY, scrollLimit) / scrollLimit;
  const zoom = 1 + scrollRatio * (maxZoom - 1);
  const filterOpacity = 0.8 + scrollRatio * 0.2;
  const gradientFade = scrollRatio; // used for crossfading gradients

  return (
    <div className='relative min-h-[200vh] w-[100%] overflow-x-hidden'>
      {/* Background GIF as image */}
      <img
        src={bg}
        alt='Background'
        className='fixed bottom-0 left-1/2 w-[100%] h-screen object-cover -z-20 transition-transform duration-200 ease-out'
        style={{
          transform: `translateX(-50%) scale(${zoom})`,
          transformOrigin: "center center",
        }}
      />
      {/* Filter overlay gradient 1 */}
      {/* <div
        className='fixed top-0 left-0 w-screen h-screen bg-gradient-to-br from-[#1e40af00] via-purple-900 to-[#1e40af00] -z-10 transition-opacity duration-200 ease-out'
        style={{ opacity: (1 - gradientFade) * filterOpacity }}
      ></div> */}
      {/* #00035882 */}
      {/* Filter overlay gradient 2 */}
      <div
        className='fixed top-0 left-0 w-[100%] h-screen bg-gradient-to-b from-[#000358] to-[#000011] -z-10 transition-opacity duration-400 ease-out'
        style={{ opacity: gradientFade * filterOpacity }}
      ></div>
      {/* Page Content */}
      <div className='relative z-0 min-h-screen w-[100%]'>
        <div className='text-white text-center pt-20'>Home Page</div>
        <div className=' text-center text-white pt-40'>
          Scroll to see zoom effect in action
        </div>
        <div className=' text-center text-white pt-40'>
          Scroll to see zoom effect in action
        </div>
        <div className=' text-center text-white pt-40'>
          Scroll to see zoom effect in action
        </div>
        <div className=' text-center text-white pt-40'>
          Scroll to see zoom effect in action
        </div>
        <div className=' text-center text-white pt-40'>
          Scroll to see zoom effect in action
        </div>
        <div className=' text-center text-white pt-40'>
          Scroll to see zoom effect in action
        </div>
        <div className=' text-center text-white pt-40'>
          Scroll to see zoom effect in action
        </div>
      </div>
    </div>
  );
};

export default Home;
