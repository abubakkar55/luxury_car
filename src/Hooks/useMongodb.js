import axios from "axios";
import { useEffect, useState } from 'react';

const useMongodb = () => {
    const [sliderData, setSliderData] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [allOrders, setAllOrders] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const handleUserInfo = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...userInfo };
        newData[field] = value;
        setUserInfo(newData);
    }

    // get all orders of all user 
    useEffect(() => {
        setIsFetching(true);
        axios.get("https://fierce-everglades-12105.herokuapp.com/orders")
            .then(res => {
                setAllOrders(res.data);
            })
            .finally(() => {
                setIsFetching(false);
            })
    }, []);


    // get products data
    useEffect(() => {
        setIsFetching(true);
        axios.get("https://fierce-everglades-12105.herokuapp.com/products_data")
            .then(res => {
                setProductsData(res.data);
            })
            .finally(() =>{
        setIsFetching(false);
            })
    }, []);



    return { sliderData, productsData, handleUserInfo, userInfo, setUserInfo, allOrders,isFetching };
}

export default useMongodb;