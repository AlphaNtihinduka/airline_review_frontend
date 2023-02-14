import React from "react";

const Airline = (props) => {
    return (
    <div className="card">
    <div className="airline_logo">
        <img src={props.attributes.image_url} alt={props.attributes.name} />
    </div>
    <div className="airline_name">{props.attributes.name}</div>
    <div className="airline_score">{props.attributes.avg_score}</div>
    <div className="airline_link">
        <a href={`/airlines/${props.attributes.slug}`}>View Airline</a></div>  
    </div>
    )
}

export default Airline