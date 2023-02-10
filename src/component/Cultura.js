import React from "react";
import images from "./images";
import "./Cultura.css";
import { motion } from "framer-motion";

const Somosfamilia = () => {
  return (
    <div>
       <motion.div className="slider-container">
      <motion.div className="slider" drag='x' dragConstraints={{right: 0, left: -2800}} >
        {images.map((image) => (
         <motion.div className="item">
           <img src={image} alt="" />
         </motion.div>
        ))}
      </motion.div>
    </motion.div>
    <div className="boton">
    <p className="btn">
              <button>
                <a href="/">Inicio</a> 
              </button>
            </p>
    </div>
    </div>
    
   
  );
};

export default Somosfamilia;
