import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SinglePd = ({ name, image, description, _id, price, condition, fuel }) => {
    
    return (
        <div className="p-5 shadow rounded-md">
            <div className="relative">
                <div>
                    <button className="px-4 py-1 text-sm outline-none  bg-orange-500 rounded shadow text-white absolute left-0">{condition} </button>

                    <button 
                    className="px-4 py-1 text-sm outline-none  border-2 border-orange-500 rounded 
                    shadow  absolute right-0"> 
                    <FontAwesomeIcon icon={faGas} /> 
                    {fuel} 
                    </button>

                    <img className="mx-auto w-64 h-48" src={image} alt="car-img" />
                </div>

                <div>
                    <h3>{name} </h3>
                    <p>{description.slice(0,110)} </p>
                    <div>
                        <button>{price} </button>
                        <button> <NavLink to={`products_details/${_id}`}> Buy Now </NavLink> </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SinglePd
