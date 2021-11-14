import React from 'react'

const DisplayPd = ({ data }) => {
    return (
        <div className="py-10">
            <div>
                {
                    data.length > 0 ?
                        data.map((item, n) => {
                            const { productId, date, displayName, image, name, price } = item;
                            return (
                                <div key={n} className="mb-5 px-12 rounded shadow flex items-center justify-between">
                                    <img className="w-44 h-36" src={image} alt="pd-img" />
                                    <h3>{name} </h3>
                                    <h3>${price} </h3>
                                    <h3>{date} </h3>
                                    <h3>{displayName} </h3>

                                </div>
                            )
                        })

                        : <div className="h-screen flex items-center justify-center">
                            <img src="https://assets.materialup.com/uploads/fa8430a1-4dea-49d9-a4a3-e5c6bf0b2afb/preview.gif" alt="spinner-img" />
                        </div>
                }


            </div>

        </div>
    )
}

export default DisplayPd
