import React from "react";
import C1 from "./imagenes/C1.png";
import "./home.css";

const Home = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <img className="C1" src={C1} />
          </div>
          <div className="nav-link">
            <p className="a">
              <button>
                <a href="/Cultura">Cultura de Casa</a>
              </button>
            </p>
            <p className="a">
              <button>
                <a href="https://goo.gl/maps/kxSGKjLdhwgHcVLP7">Encuentranos</a>
                `
              </button>
            </p>
            <p className="a">
              <button>
                <a href="https://wa.me/+526361091786">Contactanos</a>
              </button>
            </p>
          </div>
          <div className="slogan">
            <p className="vs">Sembrar | Crecer | Cosechar</p>
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');
            </style>
            <p className="s">
              Cultivar los principios de Cristo en las familias,
              <br /> Para transformar la comunidad; <br />
              De manera que el reino de Dios sea visible{" "}
            </p>
          </div>
          <div className="container2">
            <div className="horarios">
              <p>
                {" "}
                Domingos <br />
                Escuela Dominical: 10am, servicio general: 3:pm <br />
                Martes  <br />
                Estudio Biblico y oracion : 7pm <br />
                Jueves <br />
                Servicio General: 7:pm
              </p>
            
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="container-img"></div>
      </div>
    </div>
  );
};

export default Home;
