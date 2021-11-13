import React from 'react';
import './Reviews.css';



// Direct React component imports
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar, EffectCoverflow } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar, EffectCoverflow])

const data = [
    {
        rating: "3",
        name: "abu bakkar",
        image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        text: "Animi, iusto? Sequi quibusdam distinctio, magnam nam, dolore suscipit velit provident eum possimus earum nisi "
    },
    {
        rating: "3",
        name: "abu bakkar",
        image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        text: "Animi, iusto? Sequi quibusdam distinctio, magnam nam, dolore suscipit velit provident eum possimus earum nisi "
    },
    {
        rating: "3",
        name: "abu bakkar",
        image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        text: "Animi, iusto? Sequi quibusdam distinctio, magnam nam, dolore suscipit velit provident eum possimus earum nisi "
    },
    {
        rating: "3",
        name: "abu bakkar",
        image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        text: "Animi, iusto? Sequi quibusdam distinctio, magnam nam, dolore suscipit velit provident eum possimus earum nisi "
    },
    {
        rating: "3",
        name: "abu bakkar",
        image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        text: "Animi, iusto? Sequi quibusdam distinctio, magnam nam, dolore suscipit velit provident eum possimus earum nisi "
    },

]

const Reviews = () => {

    return (
        <div className="review px-6 py-10 lg:py-20">
            <h2 className="text-center font-bold font-permanent-marker text-2xl md:text-3xl lg:text-4xl">What people say about us </h2>
            <div>
                {
                    data.length > 0 ?
                        <Swiper
                            grabCursor={true} centeredSlides={true} slidesPerView={'auto'}
                            effect={'coverflow'}
                            className="container mx-auto"
                            spaceBetween={10}
                            pagination={{ clickable: true }}
                            navigation={true}
                            autoplay={true}
                            coverflowEffect={{
                                "rotate": 50,
                                "stretch": 0,
                                "depth": 100,
                                "modifier": 1,
                                "slideShadows": true
                            }}
                        >

                            {
                                data.map((item, n) => {
                                    const { name, rating, text, image } = item;
                                    return (
                                        <SwiperSlide key={n} className="bg-white p-5 shadow-md mt-20" style={{ width: " 370px", height: "240px" }}>
                                            <div className="">

                                                <Rating
                                                    readonly
                                                    initialRating={rating}
                                                    fullSymbol={<FontAwesomeIcon icon={faStar} />}
                                                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                                    className="mb-6 text-yellow-500"
                                                />
                                                <p className="mb-5 text-gray-400">{text} </p>
                                                <div className="flex items-center gap-4">
                                                    <img className="w-12 h-12 shadow  rounded-full" src={image} alt="profile" />
                                                    <h3>{name} </h3>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        : <div className="h-screen flex items-center justify-center">
                            <img src="https://assets.materialup.com/uploads/fa8430a1-4dea-49d9-a4a3-e5c6bf0b2afb/preview.gif" alt="spinner-img" />
                        </div>
                }
            </div>
        </div>
    )
}

export default Reviews
