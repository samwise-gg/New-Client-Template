// components/ServicesCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import webDesign from "../assets/WebDesignBG.jpg";
import responsiveDev from "../assets/ResponsiveDev.jpg";
import searchEngOp from "../assets/SearchEngOp.jpg";
import performanceTuning from "../assets/homeBG7.jpg";
import accessibilityCompliant from "../assets/homeBG4.jpg";
import maintenanceSupport from "../assets/team-hero.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

// Default services data; can be overridden via props
const defaultServices = [
  {
    title: "SEO Optimization",
    description:
      "Improve your search rankings and drive more organic traffic with smart keyword strategies and on-page SEO.",
    icon: "🔍",
    background: { backgroundImage: `url(${searchEngOp})` },
  },
  {
    title: "Web Design",
    description:
      "Let us build you a Custom-crafted website that reflects your brand's identity, optimized for performance and user engagement.",
    icon: "🎨",
    background: { backgroundImage: `url(${webDesign})` },
  },
  {
    title: "Responsive Development",
    description:
      "We make sure your website will look great across all devices.",
    icon: "📱",
    background: { backgroundImage: `url(${responsiveDev})` },
  },
    {
      title: "Performance Tuning",
      description: "Fast-loading websites for better user experience.",
      icon: "⚡",
      background: { backgroundImage: `url(${performanceTuning})` },
    },
    {
      title: "Accessibility Compliance",
      description: "Inclusive designs accessible to all users.",
      icon: "♿",
      background: { backgroundImage: `url(${accessibilityCompliant})` },
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support to keep your site up-to-date.",
      icon: "🛠️",
      background: { backgroundImage: `url(${maintenanceSupport})` },
    },
];

export default function ServicesCarousel({
  services = defaultServices,
  loop = true,
}) {
  return (
    <section className='container mx-auto bg-transparent '>
      <div className=' max-w-5xl mx-auto rounded-2xl shadow-lg md:p-12'>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          loop={loop}
          a11y={{
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
          }}
          spaceBetween={20}
          slidesPerView={1}
          className='max-w-3xl mx-auto h-full'
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div
                style={service.background}
                className='bg-no-repeat bg-center bg-cover bg-fixed flex flex-col justify-center h-[50vh] items-center text-center sm:rounded-xl p-6'
              >
                <div className=' sm:max-w-[40%] max-w-[60%] text-center mx-auto border-2 border-purple-500 bg-[#111827db] rounded-xl p-6 py-12'>
                  <div className='text-4xl md:text-6xl mb-4' aria-hidden='true'>
                    {service.icon}
                  </div>
                  <h3 className=' md:text-3xl font-bold text-purple-300 mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-xs md:text-md text-gray-400 max-w-prose'>
                    {service.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
