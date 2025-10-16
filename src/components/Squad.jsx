import HeroImage from "../assets/AboutpageHero-removebg-preview.png";
import SamImg from "../assets/team/sam.png";
import AlexImg from "../assets/team/alex.png";
import TaylorImg from "../assets/team/taylor2.png";
import JordanImg from "../assets/team/jordan.png";
import ChrisImg from "../assets/team/chris.png";
import MorganImg from "../assets/team/morgan.png";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";

export default function Squad() {
  const [contactVisible, setContactVisible] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const team = [
    {
      name: "Sam",
      title: "Founder & Lead Developer",
      description: "Full-stack developer overseeing all projects.",
      image: SamImg,
      animation: "fade-right",
    },
    {
      name: "Alex",
      title: "UI/UX Designer",
      description: "Crafts elegant and intuitive user experiences.",
      image: AlexImg,
      animation: "fade-down",
    },
    {
      name: "Katherine",
      title: "Project Manager",
      description: "Keeps timelines tight and goals on track.",
      image: JordanImg,
      animation: "fade-left",
    },
    {
      name: "Taylor",
      title: "Content Strategist",
      description: "Shapes brand messaging and web content.",
      image: TaylorImg,
      animation: "fade-right",
    },
    {
      name: "Chuck",
      title: "Backend Developer",
      description: "Builds robust and scalable server systems.",
      image: ChrisImg,
      animation: "fade-up",
    },
    {
      name: "Maegan",
      title: "QA Engineer",
      description: "Ensures every release is rock solid.",
      image: MorganImg,
      animation: "fade-left",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className='w-full pt-40 flex flex-col items-center justify-center px-6 md:flex-row md:gap-12'>
        {/* Left - Cartoon Image */}
        <div className='w-full md:w-1/2 flex justify-end'>
          <img
            src={HeroImage}
            alt='Team of Developers'
            className='max-w-[750px] w-full h-auto'
          />
        </div>

        {/* Right - Text Content */}
        <div className='w-full md:w-1/2 text-center md:text-left sm:pl-[4rem]'>
          <h1 className='text-4xl font-extrabold mb-6 text-blue-400'>
            Meet the Squad
          </h1>
          <p className='text-lg text-gray-300 max-w-md'>
            A tight crew of creative builders — design-forward, code-savvy, and
            startup-minded.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <div className='w-full md:w-1/2 text-center md:text-left pb-4 mx-auto'>
        <h1 className='text-4xl font-extrabold text-center mb-6 text-blue-400 '>
          Our Team
        </h1>
      </div>
      <section className='max-w-4xl mx-auto grid gap-16 sm:grid-cols-2 lg:grid-cols-3 text-center px-8'>
        {team.map(({ name, title, description, image, animation }) => (
          <div
            key={name}
            data-aos={animation}
            className='relative w-full h-[340px] rounded-2xl border border-blue-400 bg-transparent shadow-xl overflow-hidden group hover:scale-105 transition duration-300'
          >
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover '
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4'>
              <h2 className='text-white font-bold text-lg'>{name}</h2>
              <p className='text-blue-300 text-sm'>{title}</p>
              <p className='text-gray-300 text-xs'>{description}</p>
            </div>
          </div>
        ))}
      </section>
      <div className='text-center mt-24 rounded-2xl pb-24 max-w-[20rem] mx-auto'>
        <p className='text-lg text-gray-300'>Want to work with us?</p>
        <button
          onClick={() => setContactVisible(!contactVisible)}
          className='inline-block mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition'
          >
          Get in Touch
        </button>
          {contactVisible && (
            <div className='absolute mt-4 w-[350px] bg-[#0b0f19] border border-zinc-700 p-4 rounded-xl shadow-xl z-50'>
              <ContactForm />
            </div>
          )}
      </div>
      </>
  );
}
