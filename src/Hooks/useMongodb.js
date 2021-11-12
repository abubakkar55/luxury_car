import { useEffect, useState } from 'react';
import axios from "axios";

const useMongodb = () => {
    const [sliderData, setSliderData] = useState([]);
    const [productsData, setProductsData] = useState([]);

    // get slider data
    useEffect(() => {
        axios.get("http://localhost:5000/slider_data")
            .then(res => {
                setSliderData(res.data);
            })
    }, []);

    // get products data
    useEffect(() => {
        axios.get("http://localhost:5000/products_data")
            .then(res => {
                setProductsData(res.data);
            })
    }, []);

    return { sliderData, productsData };
}

export default useMongodb;