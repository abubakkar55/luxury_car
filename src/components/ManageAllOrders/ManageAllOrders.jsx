import React from 'react'
import useMongoFirebase from './../../Hooks/useMongoFirebase';
import DisplayPd from './../DisplayOrders/DisplayPd';

const ManageAllOrders = () => {

    const { mongoContext: { allOrders } } = useMongoFirebase();

    return (
        <div>
            <DisplayPd data={allOrders} />
        </div>
    )
}

export default ManageAllOrders
