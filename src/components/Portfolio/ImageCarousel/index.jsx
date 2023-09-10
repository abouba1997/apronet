/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

const ImageCarousel = ({ swiperType, photos }) => {
  return (
    <>
      <Swiper {...swiperType} className="mySwiper">
        {photos.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image.img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ImageCarousel;
