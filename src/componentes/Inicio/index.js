import React from 'react';
/* import Portada from "../../images/"; */
import { Link } from "react-router-dom";

export const Inicio = () => {
    return (
        <div className="Inicio">
          <Link to="/" > 
            <h1 className="title">Inicio</h1>
          </Link>
          <Link to="/productos" >
            <h1 className="title">Productos</h1>
          </Link>
          {/* <img src={Portada} alt="inico"/> */}
        </div>
    )
}