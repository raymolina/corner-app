import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slider from "react-slider";

//Rutas de componentes
import Home from "./component/home";
import Cultura from "./component/Cultura";
import Encuentranos from "./component/Encuentranos";
import Contactanos from "./component/Contactanos";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cultura" element={<Cultura />} />
          <Route path="/Encuentranos" element={<Encuentranos />} />
          <Route path="/Contactanos" element={<Contactanos />} />
        </Routes>
      </BrowserRouter>

      <Slider></Slider>
    </div>
  );
}

export default App;
