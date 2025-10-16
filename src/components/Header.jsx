import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import ContactForm from "./ContactForm";
import { useEffect, useState, useRef } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [pageTop, setPageTop] = useState(true);
  const [isPinned, setIsPinned] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const isContactVisible = isPinned || isHovering;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 1);
  };

  useEffect(() => {
    window.scrollY > 0 ? setPageTop(false) : setPageTop(true);
    clearTimeout(timeoutRef.current);
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isPinned &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setIsPinned(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPinned]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
        ${
          isVisible
            ? "bg-[#0a103d] border-b border-blue-600 opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6"
        }
        ${
          pageTop
            ? "bg-[#ffffff00] translate-y-0 border-none"
            : "bg-[#000946] border-b border-blue-600 -translate-y-6"
        }
        bg-background text-white shadow-md`}
    >
      <div className='container mx-auto p-4'>
        <nav className='flex justify-between items-center w-full'>
          <div className='flex items-center space-x-4 sm:space-x-6'>
            {/* <Link to='/' className='group transition-all duration-300'>
              <img
                src={logo}
                alt='Ground Gigs'
                className='h-[3.5rem] group-hover:animate-spin-once  transition-transform duration-500 ease-in-out'
              />
            </Link> */}
            <a href='/' className='group transition-all duration-300'>
              <img
                src={logo}
                alt='Ground Gigs'
                className='h-[3.5rem] group-hover:animate-spin-once  transition-transform duration-500 ease-in-out'
              />
            </a>
          </div>
          <div className=''>
            <div
              ref={containerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='relative'
            >
              <button
                onClick={() => setIsPinned((prev) => !prev)}
                className='text-[#0563ba] font-bold hover:text-accent transition flex items-center gap-1 hover:scale-110 duration-100'
              >
                <i className='fa fa-envelope text-xl' aria-hidden='true'></i>
              </button>

              {isContactVisible && (
                <div className='absolute right-0 mt-3 w-[350px] bg-[#0b0f19] border border-zinc-700 p-4 rounded-xl shadow-xl z-50'>
                  <ContactForm />
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
