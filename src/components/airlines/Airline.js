import React from "react";
import {  Link } from "react-router-dom";

const Airline = (props) => {
    return (
    <div className="card">
    <div className="airline_logo">
        <img src={props.attributes.image_url} alt={props.attributes.name} />
    </div>
    <div className="airline_name">{props.attributes.name}</div>
    <div className="airline_score">{props.attributes.avg_score}</div>
    <div className="link_wrapper">
        <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link></div>  
    </div>
    )
}

export default Airline