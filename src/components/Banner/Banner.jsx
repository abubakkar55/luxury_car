import React from 'react';
import bg from '../../images/banner-bg.jpg';
import { NavLink } from 'react-router-dom';
import useMongoFirebase from '../../Hooks/useMongoFirebase';
import "./Banner.css";

// Direct React component imports
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar])

const Banner = () => {
    const { mongoContext: { sliderData } } = useMongoFirebase();

    return (
        <div>
            {
                sliderData.length > 0 ?

                    <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(${bg})`, backgroundPosition: "center center", backgroundSize: "100% 100%" }}
                    >

                        <Swiper
                            className="container mx-auto"
                            spaceBetween={10}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            navigation={true}
                            slidesPerView={1}
                            autoplay={true}
                            //onSlideChange={() => console.log('slide change')}
                        //onSwiper={(swiper) => console.log(swiper)}
                        >

                            {sliderData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="pl-10">
                                        <div className="flex items-center justify-between h-screen">
                                            <div className="w-1/2 px-10">
                                                <h2 data-aos="fade-up" data-aos-duration="500" className="text-5xl font-semibold text-white font-permanent-marker mb-4">
                                                    {item.name}
                                                </h2>

                                                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" className="text-gray-400 mb-6">
                                                    {item.description}
                                                </p>
                                                <button data-aos="fade-up" data-aos-delay="500" data-aos-duration="800" className="px-7 py-3 border-2 border-white font-semibold font-permanent-marker text-white  hover:bg-white hover:text-black">
                                                    <NavLink to="/products">Check it out </NavLink>
                                                </button>
                                            </div>
                                            <div className="w-1/2">
                                                <img data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000" className="-mt-20 w-full h-2/5" src={item.image} alt="slider-img" />
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                )
                            })
                            }
                        </Swiper>

                    </div>
                    :
                    (
                        <div className="h-screen flex items-center justify-center">
                        <img src="https://assets.materialup.com/uploads/fa8430a1-4dea-49d9-a4a3-e5c6bf0b2afb/preview.gif" alt="spinner-img" />
                        </div>
                    )
            }
        </div>

    )
}

export default Banner
