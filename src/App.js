import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
    const fetchdataDetail = async () => {
        const response = await axios
        .get(`http://127.0.0.1:3000/api/v1/airlines`)
        .catch((err) => {
            console.log("error: ", err)
        });
        console.log(response.data)
    }

    useEffect(() => {
        fetchdataDetail()
    },[]) 
  return <h1>Hello React and rails</h1>;
};

export default App;