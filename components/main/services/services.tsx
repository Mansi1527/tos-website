"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import Swiper modules

import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ServiceCard } from "./serviceCard";
import { servicesData } from "@/data";
import { ClientDomains } from "./clientDomain";

export const Services: React.FC = () => {
  return (
    <>
      <section className="md:grid bg-white text-black max-h-screen " id="services">
        <div className="w-full">
          <section className="py-24 bg-white m-4">
            <div className="container mx-auto px-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold md:text-center text-start mb-12">
                Services we can help you with
              </h2>
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true} // Enables infinite looping
                autoplay={{
                  delay: 2000, // Set the delay for autoplay in milliseconds
                  disableOnInteraction: false, // Continue autoplay after user interaction
                }}
               
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },

                  1300: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                className="mySwiper "
    
              >
                {servicesData.map((service, index) => (
                  <SwiperSlide key={index} style={{paddingLeft: "0px"}}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      image={service.image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
          
        </div>
      </section>
    </>
  );
};
