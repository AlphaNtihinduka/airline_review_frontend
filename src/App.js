import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Airlines from "./components/airlines/Airlines";
import Airline from "./components/airline/Airline";

const App = () => (
    <div>
    <Router>
    <Routes>
      <Route exact path="/" element={<Airlines />} />
      <Route exact path="/airlines/:slug" element={<Airline />} />
    </Routes>
  </Router>
  </div>
);

export default App;