import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DisplayPd from '../DisplayOrders/DisplayPd';
import useMongoFirebase from './../../Hooks/useMongoFirebase';

const ManageUserOrders = () => {

    const [userOrders, setUserOrders] = useState([]);

    const { firebaseContext: { firebaseData } } = useMongoFirebase();

    // get all orders of specific user orders
    useEffect(() => {
        axios.get(`https://fierce-everglades-12105.herokuapp.com/user_orders/${firebaseData?.email}`)
            .then(res => {
                setUserOrders(res.data);
            })
    }, [firebaseData?.email]);

    return (
        <div>
            <DisplayPd data={userOrders} />
        </div>
    )
}

export default ManageUserOrders
