import { useEffect, useState } from 'react';
import axios from "axios";

const useMongodb = () => {
    const [sliderData, setSliderData] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    const handleUserInfo = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...userInfo };
        newData[field] = value;
        setUserInfo(newData);
    }

    // get slider data
    useEffect(() => {
        axios.get("https://fierce-everglades-12105.herokuapp.com/slider_data")
            .then(res => {
                setSliderData(res.data);
            })
    }, []);

    // get products data
    useEffect(() => {
        axios.get("https://fierce-everglades-12105.herokuapp.com/products_data")
            .then(res => {
                setProductsData(res.data);
            })
    }, []);


    return { sliderData, productsData, handleUserInfo, userInfo, setUserInfo };
}

export default useMongodb;