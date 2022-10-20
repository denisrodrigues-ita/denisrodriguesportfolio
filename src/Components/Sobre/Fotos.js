import React from 'react'
import styles from './Fotos.module.css'
import foto2 from '../../img/imgSobre/img2.jpg'
import foto3 from '../../img/imgSobre/img3.jpg'
import foto4 from '../../img/imgSobre/img4.jpg'
import foto6 from '../../img/imgSobre/img6.jpg'
import foto7 from '../../img/imgSobre/img7.jpg'
import foto8 from '../../img/imgSobre/img8.jpg'
import foto9 from '../../img/imgSobre/img9.jpg'
import foto10 from '../../img/imgSobre/img10.jpg'
import foto11 from '../../img/imgSobre/img11.jpg'
import foto12 from '../../img/imgSobre/img12.jpg'
import foto13 from '../../img/imgSobre/img13.jpg'
import foto14 from '../../img/imgSobre/img14.jpg'
import foto15 from '../../img/imgSobre/img15.jpg'
import foto16 from '../../img/imgSobre/img16.jpg'
import foto17 from '../../img/imgSobre/img17.jpg'
import foto18 from '../../img/imgSobre/img18.jpg'
import foto19 from '../../img/imgSobre/img19.jpg'
import foto20 from '../../img/imgSobre/img20.jpg'
import foto21 from '../../img/imgSobre/img21.jpg'
import foto22 from '../../img/imgSobre/img22.jpg'
import foto23 from '../../img/imgSobre/img23.jpg'
import foto24 from '../../img/imgSobre/img24.jpg'
import foto25 from '../../img/imgSobre/img25.jpg'
import foto26 from '../../img/imgSobre/img26.jpg'

// swiper import
import { Navigation, Pagination, Autoplay, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper css import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/zoom";

const Fotos = () => {
  return (

    <div className={styles.fotos}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Zoom]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true} >

        <SwiperSlide><img src={foto2} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto3} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto4} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto6} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto7} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto8} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto9} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto10} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto11} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto12} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto13} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto14} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto15} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto16} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto17} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto18} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto19} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto20} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto21} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto22} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto23} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto24} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto25} alt='foto' /></SwiperSlide>
        <SwiperSlide><img src={foto26} alt='foto' /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Fotos