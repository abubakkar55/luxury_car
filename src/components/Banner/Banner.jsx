import React from 'react';
import bg from '../../images/banner-bg.jpg';
import { NavLink } from 'react-router-dom';
import "./Banner.css";

// Direct React component imports
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar])

const Banner = () => {
    const sliderData  = [
        {
name: "Luxury BWM",
description : "Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles",
image : "./images/1.png"
        },
        {
name: "Automotive Marque Mercedes-Benz",
description : "Mercedes-Benz, commonly referred to as Mercedes, is a German luxury automotive marque. Mercedes-Benz and subsidiary Mercedes-Benz AG – of Daimler AG – are headquartered in Stuttgart, Baden",
image : "./images/2.png"
        },
        {
name: "Lamborghini Superstar",
description : "Automobile Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese.",
image : "./images/3.png"
        }
    ];

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
                                    <SwiperSlide key={index} className="md:pl-10">
                                        <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-between h-screen">
                                            <div className="md:w-1/2 px-10 order-2 md:order-1">
                                                <h2 data-aos="fade-up" data-aos-duration="500" className="text-2xl md:3xl lg:text-5xl font-semibold text-white font-permanent-marker mb-4">
                                                    {item.name}
                                                </h2>

                                                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" className="text-gray-400 mb-6">
                                                    {item.description}
                                                </p>
                                                <button data-aos="fade-up" data-aos-delay="500" data-aos-duration="800" className="px-7 py-3 border-2 border-white font-semibold font-permanent-marker text-white  hover:bg-white hover:text-black">
                                                    <NavLink to="/explore_cars">Check it out </NavLink>
                                                </button>
                                            </div>
                                            <div className="md:w-1/2 order-1 md:order-2">
                                                <img data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000" className="h-64 w-64 mx-auto md:mx-0  sm:w-72 sm:h72 md:w-4/5  md:h-3/5" src={item.image} alt="slider-img" />
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
