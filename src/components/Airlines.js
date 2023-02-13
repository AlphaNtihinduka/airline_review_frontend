import React, { useState, useEffect }from "react";
import axios from "axios";

const Airlines = () => {
    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/api/v1/airlines')
        .then(resp => console.log(resp))
        .catch( resp => console.log(resp))
    }, [airlines.length])
    return (<div>These are the airlines</div>)
}

export default Airlines