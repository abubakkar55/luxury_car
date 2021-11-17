import React from 'react';
import useMongoFirebase from '../Hooks/useMongoFirebase';
import axios from 'axios';
import { useState } from 'react';

const AddAProduct = () => {
    const { firebaseContext: { inputData, firebaseData, userData, setUserData, handleUserData } } = useMongoFirebase();
    const [image, setImage] = useState(null);

    const handleAddProduct = (e) => {
        e.preventDefault();
        const { pdName, pdDetails, pdCc, pdCondition, pdFuel, pdPrice } = userData;
        const newData = { pdName, pdDetails, pdCc, pdCondition, pdFuel, pdPrice };
        const formData = new FormData();

        axios.post("https://fierce-everglades-12105.herokuapp.com/add_product_db", newData)
            .then(res => {
                if (res.statusText === "OK") {
                    alert("added successfully")
                    e.target.reset();
                }
            });
    }

    return (
        <div className="p-10">
            <div className="p-6 shadow-md rounded">
                <form onSubmit={handleAddProduct}>
                    {
                        inputData?.slice(12)?.map((item, index) =>
                            <input key={index} className="w-full outline-none p-3  rounded border-2 focus:border-orange-500 mb-4 text-sm" onChange={handleUserData} type={item.type} name={item.name} placeholder={item.placeholder} required />
                        )
                    }
                    <input onChange={e => console.log(e.target.files)} className="block" accept="image/*" type="file" required />
                    <button className="px-6 py-2 border-2 border-orange-500 rounded shadow mt-3" type="submit">Add Now</button>
                </form>

            </div>
        </div>
    )
}

export default AddAProduct
