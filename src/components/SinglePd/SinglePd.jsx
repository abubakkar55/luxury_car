import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { faGasPump, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const SinglePd = ({ name, image, description, _id, price, condition, fuel }) => {

    return (
        <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="600" className="p-5 shadow rounded-md">
            <div className="relative">
                <div>
                    <button className="px-4 py-1 text-sm outline-none  bg-orange-500 rounded shadow text-white absolute left-0">{condition} </button>

                    <button
                        className="px-4 py-1 text-sm font-semibold outline-none  border-2 border-orange-500 rounded 
                    shadow  absolute right-0">
                        <FontAwesomeIcon className="mr-1" icon={faGasPump} />
                        {fuel}
                    </button>
                    <img className="mx-auto pt-10 w-64 h-48" src={image} alt="car-img" />
                </div>

                <div>
                
                    <h3 className="text-xl font-semibold mb-3">{name} </h3>
                    <p className="mb-3 text-gray-500 leading-tight">{description.slice(0, 110)} </p>
                    <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center">
                        <button className="text-2xl font-semibold mb-3 sm:mb-0  outline-none"> ${price} </button>
                        <button className="px-4 py-2 font-semibold  outline-none  bg-orange-500 rounded shadow text-white"> <NavLink to={`products_details/${_id}`}>
                            <FontAwesomeIcon className="mr-1" icon={faShoppingCart} />
                            Buy Now </NavLink> </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SinglePd
