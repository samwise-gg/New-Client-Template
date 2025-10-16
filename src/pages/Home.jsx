import React, { useEffect, useState } from "react";
// import bg from "../assets/GG_2_starsBG3.gif";
import bg from "../assets/hero-notext2.jpg";
import bgMobile from "../assets/mobile-hero.jpg";
import ServicesCarousel from "../components/ServicesCarousel";
import logo from "../assets/logo.jpg";
import ServicesCards from "../components/WhyChooseUs";
import Squad from "../components/Squad"
import ContactForm from "../components/ContactForm";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [contactVisible, setContactVisible] = useState(false);

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
        className='hidden md:block fixed bottom-0 left-1/2 w-[100%] h-screen object-cover -z-20 transition-transform duration-200 ease-out'
        style={{
          transform: `translateX(-50%) scale(${zoom})`,
          transformOrigin: "center center",
        }}
      />
      <img
        src={bgMobile}
        alt='Background'
        className='block md:hidden fixed bottom-0 left-1/2 w-[100%] h-screen object-cover -z-20 transition-transform duration-200 ease-out'
        style={{
          transform: `translateX(-50%) scale(${zoom})`,
          transformOrigin: "center center",
        }}
      />
      {/* Filter overlay gradient */}
      <div
        className='fixed top-0 left-0 w-[100%] h-screen bg-gradient-to-b from-[#10093b] to-[#000011] -z-10 transition-opacity duration-400 ease-out'
        style={{ opacity: gradientFade * filterOpacity }}
      ></div>
      {/* Page Content */}
      <div className='relative z-0 min-h-screen w-[100%]'>
        <div className='flex flex-col justify-center h-full px-6 pt-40 md:pt-80 md:pl-[10%] max-w-6xl mx-auto text-white md:text-left text-center'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg'>
            Digital Solutions <br /> for Your Business
          </h1>
          <p className='mt-4 mb-40 text-lg md:text-xl text-textSecondary max-w-xl drop-shadow-md'>
            Creating custom websites to grow your online presence
          </p>
        </div>
        <section className='text-center px-6 pt-80 mt-80 max-w-3xl mx-auto relative z-10'>
          <h2 className='text-4xl font-extrabold text-blue-600 mb-4'>
            Your Website, Done Right
          </h2>
          <p className='text-lg text-gray-300 mb-8'>
            Ground Gigs builds sleek, modern websites for small businesses.
            Fast, responsive, and built to convert.
          </p>
          <button
            onClick={() => setContactVisible(!contactVisible)}
            aria-label='Contact Ground Gigs'
            className='bg-blue-700 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition'
          >
            Get Started
          </button>
          {contactVisible && (
            <div className='absolute mt-4 w-[350px] bg-[#0b0f19] border border-zinc-700 p-4 rounded-xl shadow-xl z-50'>
              <ContactForm />
            </div>
          )}
        </section>
        <h2 className='mt-36 text-[1.4rem] sm:text-[2.5rem] font-bold text-center mb-4 text-purple-300'>
          Explore the Possibilities
        </h2>
        <ServicesCarousel />
      </div>
      <div className='mt-20 max-w-fit mx-auto group transition-all duration-300'>
        <img
          src={logo}
          alt='Ground Gigs'
          className='group transition-all duration-300 h-[6.5rem] group-hover:animate-spin-once  transition-transform duration-500 ease-in-out'
        />
      </div>
      <h2 className='text-center mt-10 mb-4 text-purple-300 text-[1.4rem] font-bold'>
        Why Choose Us?
      </h2>
      <ServicesCards />
      <Squad />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
