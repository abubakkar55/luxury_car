
import React from 'react'
import useMongoFirebase from '../../Hooks/useMongoFirebase';

const Login = () => {
    const { firebaseContext: {  handleUserData, inputData, userData } } = useMongoFirebase();

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        console.log(userData);

        e.target.reset();
    }

    return (
        <div className="p-6 shadow-md rounded">
            <form onSubmit={handleLoginSubmit}>
                {
                    inputData?.slice(0,3)?.map((item, index) =>
                        <input key={index} className="w-full outline-none p-3  rounded border-2 focus:border-orange-500 mb-4 text-sm" onChange={handleUserData} type={item.type} name={item.name} placeholder={item.placeholder} required />
                    )
                }
                <button className="px-6 py-2 border-2 border-orange-500 rounded shadow mt-3" type="submit">Login </button>
            </form>
            
        </div>
    )
}

export default Login
