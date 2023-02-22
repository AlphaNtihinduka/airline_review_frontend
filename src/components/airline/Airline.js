import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Airline = (props) => {
    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const slug  = useParams("slug").slug
    useEffect(() => {
        const url = `http://127.0.0.1:3000/api/v1/airlines/${slug}`
        axios.get(url)
        .then(resp => console.log("resp: ",resp.data))
        .catch(resp => console.log(resp))
    }, [])
    return (
    <div>This is the airline show</div>
    )
}

export default Airline