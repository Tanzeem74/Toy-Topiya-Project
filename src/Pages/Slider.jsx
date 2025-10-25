import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="container mx-auto mt-10">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="rounded-2xl shadow-2xl"
      >
        <SwiperSlide>
          <div className="hero min-h-[300px] sm:min-h-[400px] bg-linear-to-r from-pink-300 via-yellow-200 to-blue-300 flex justify-center items-center rounded-2xl">
            <div className="text-center text-neutral-content">
              <h1 className="text-5xl font-bold text-white">
                Welcome to ToyTopia!
              </h1>
              <p className="mt-4 text-lg text-white">
                Discover amazing toys that make every child smile.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[300px] sm:min-h-[400px] bg-linear-to-r from-pink-300 via-yellow-200 to-blue-300 flex justify-center items-center rounded-2xl">
            <div className="text-center text-neutral-content">
              <h1 className="text-4xl font-bold text-white">
                Explore Our Car Collection
              </h1>
              <p className="mt-4 text-lg text-white">
                Remote cars, racing cars & more — all in one place!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[300px] sm:min-h-[400px] bg-linear-to-r from-pink-300 via-yellow-200 to-blue-300 flex justify-center items-center rounded-2xl">
            <div className="text-center text-neutral-content">
              <h1 className="text-4xl font-bold text-white">
                Educational Toys
              </h1>
              <p className="mt-4 text-lg text-white">
                Learn while you play — smart fun for curious minds!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[300px] sm:min-h-[400px] bg-linear-to-r from-pink-300 via-yellow-200 to-blue-300 flex justify-center items-center rounded-2xl">
            <div className="text-center text-neutral-content">
              <h1 className="text-4xl font-bold text-white">
                Action Figures & Heroes
              </h1>
              <p className="mt-4 text-lg text-white">
               Fly with your favorite characters!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
