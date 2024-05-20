"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

const Brands = () => {
  return (
    <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 6, spaceBetween: 50 },
          }}
        >
          {brandData.map((brand) => (
            <SwiperSlide key={brand.id}>
              <SingleBrand brand={brand} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
