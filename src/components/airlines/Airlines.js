import React, { useState, useEffect }from "react";
import {  } from "react";
import axios from "axios";
import Airline from "./Airline";

const Airlines = () => {
    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/api/v1/airlines')
        .then(resp => {
            setAirlines(resp.data.data)
            console.log(resp.data.data)
        })
        .catch( resp => console.log(resp))
    }, [airlines.length])

    const airlines_list = airlines.map(airline => {
        return (<Airline 
            key={airline.attributes.slug} 
            attributes={airline.attributes}
            />)
    })
    return (
        <div className="home">
            <div className="header">
                <h1>OpenFlights</h1>
                <p className="subheader">Honest, unbiased airline reviews</p>
            </div>
            <div className="grid">{airlines_list}</div>
            
        </div>
    
    )
}

export default Airlines