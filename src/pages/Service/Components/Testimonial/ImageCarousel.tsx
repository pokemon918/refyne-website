import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

import './style1.css'
import { ICarousel } from '@/constants/basic'

const ImageCarousel = ({ currentIndex, data }: ICarousel) => {
    const [swiperRef, setSwiperRef] = useState(null)

    useEffect(() => {
        swiperRef?.slideTo(currentIndex)
    }, [currentIndex])

    return (
        <Swiper
            cssMode
            loop
            className="mySwiper"
            onSwiper={setSwiperRef}
            slidesPerView={1}
        >
            {data.map((el, key) => (
                <SwiperSlide key={`image-carousel-${key}`}>
                    <img src={el.avatar} alt="avatar" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ImageCarousel
