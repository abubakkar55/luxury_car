import React, { useEffect, useState } from 'react';
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
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar, EffectCoverflow])


const Reviews = () => {

    const [review, setReviews] = useState([]);

    // get_review
    useEffect(() => {
        axios.get("https://fierce-everglades-12105.herokuapp.com/get_review")
            .then(res => {
                setReviews(res.data);
            })
    }, []);


    return (
        <div className="review px-6 py-10 lg:py-20">
            <h2 className="text-center font-bold font-permanent-marker text-2xl md:text-3xl lg:text-4xl">What people say about us </h2>
            <div>
                {
                    review.length > 0 ?
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
                                review.map((item, n) => {
                                    const { displayName, rating, message, image } = item;
                                    return (
                                        <SwiperSlide key={n} className="bg-white p-5 shadow-md mt-20" style={{ width: " 370px", height: "240px" }}>
                                            <div className="">

                                                <Rating
                                                    readonly
                                                    initialRating={rating}
                                                    fullSymbol={<FontAwesomeIcon icon={faStar} />}
                                                    // === sorry sir i can't add a regular star font awesome. i have tried to add it.
                                                    emptySymbol={<FontAwesomeIcon icon={faCheck} />}
                                                    className="mb-6 text-yellow-500"
                                                />
                                                <p className="mb-5 text-gray-400">{message} </p>
                                                <div className="flex items-center gap-4">
                                                    <img className="w-12 h-12 shadow  rounded-full" src={image ? image : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"}
                                                     alt="profile" />
                                                    <h3>{displayName} </h3>
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
