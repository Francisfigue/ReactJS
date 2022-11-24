 import React from 'react';

 export const ProductosItem = ({
    key,
    id,
    nombre,
    importe,
    categoria,
    stock,
    imagen
 }) => {
    return(
        <div className="producto">
            <a href="#">
                <div className="producto_img">
                    <img src={imagen} alt ={nombre} />
                </div>
            </a>
            <div className="producto__footer">
                <h1>{nombre}</h1>
                <p> {categoria}</p>
                <p className="price"> ${importe}</p>
            </div>
            <div className="button">
                <button className="btn">
                Añadir al carrito
                </button>
            <div className="btn">
                Vista
            </div>
            </div>
        </div>
    )
 }