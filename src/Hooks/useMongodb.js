import { useEffect, useState } from 'react'
import axios from "axios";
const useMongodb = () => {
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/slider_data")
            .then(res => {
                setSliderData(res.data);
            })
    }, []);

    return { sliderData }
}

export default useMongodb
