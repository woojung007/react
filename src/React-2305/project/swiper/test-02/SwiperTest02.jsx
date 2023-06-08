import React from 'react';
import styles from './SwiperTest02.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

export default function SwiperTest02() {
    return (
        <Swiper
            className={styles.container}
            spaceBetween={50}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination, Scrollbar]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            {/* <SwiperSlide className={styles.slides}>
                {SLIDES.map((slide) => (
                    <div key={slide.id} className={styles.slide}>
                        {slide.value}
                    </div>
                ))}
            </SwiperSlide> */}

            <SwiperSlide className={styles.slides}>Slide 1</SwiperSlide>
            <SwiperSlide className={styles.slides}>Slide 2</SwiperSlide>
            <SwiperSlide className={styles.slides}>Slide 3</SwiperSlide>
            <SwiperSlide className={styles.slides}>Slide 4</SwiperSlide>
        </Swiper>
    );
}

const SLIDES = Array.from({ length: 37 }).map((slide, idx) => ({
    id: idx,
    value: `스타벅스 ${idx + 1}`,
}));
