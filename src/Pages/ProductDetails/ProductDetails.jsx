import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
    const { id } = useParams();
    const [singleProductData, setSingleProductsData] = useState({});
    const { image, name, description, fuel, condition, cc, price } = singleProductData

    // get a specific product data
    useEffect(() => {
        axios.get(`http://localhost:5000/${id}`)
            .then(res => {
                setSingleProductsData(res.data);
            })
    }, []);


    return (
        <div className="container mx-auto px-6 py-10 md:py-20">
            <div className="flex justify-between gap-6">
                <div className="w-1/2">
                    <img className="w-96 h-72" src={image} alt="car-img" />
                </div>

                <div className="w-1/2">
                    <h3 className="text-4xl font-semibold mb-3">{name} </h3>
                    <p className="mb-3 text-gray-500 leading-tight">{description} </p>
                    <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center">
                        <button className="text-2xl font-semibold mb-3 sm:mb-0  outline-none"> ${price} </button>
                        <button className="px-4 py-2 font-semibold  outline-none  bg-orange-500 rounded shadow text-white">
                            <FontAwesomeIcon className="mr-1" icon={faEnvelope} />
                        </button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ProductDetails
