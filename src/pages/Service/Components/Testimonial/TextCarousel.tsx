import React, { useRef, useState, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

import './style2.css'

// import required modules
import { EffectFade } from 'swiper/modules'
import { ICarousel } from '@/constants/basic'

const TextCarousel = ({ currentIndex, data }: ICarousel) => {
    const [swiperRef, setSwiperRef] = useState(null)

    useEffect(() => {
        swiperRef?.slideTo(currentIndex)
    }, [currentIndex])

    return (
        <Swiper
            effect="fade"
            modules={[EffectFade]}
            className="mySwiper2"
            onSwiper={setSwiperRef}
        >
            {data.map((el, key) => (
                <SwiperSlide
                    key={`text-carousel-${key}`}
                    className="flex flex-col items-start justify-start gap-2 p-6 text-black bg-[#faf0e6] lg:gap-6 lg:p-12"
                >
                    <div className="flex items-start justify-between w-full gap-6">
                        <div className="flex flex-col">
                            <h1 className="text-sm">{el.fullName}</h1>
                            <h3 className="text-xs text-gray-600">
                                {el.title}
                            </h3>
                        </div>
                        <div className="w-[32px]">
                            <img src={el.icon} alt="icon" />
                        </div>
                    </div>
                    <div className="text-sm text-left">{el.feedback}</div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default TextCarousel
