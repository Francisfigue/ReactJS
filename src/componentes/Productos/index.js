import React, { useContext } from 'react';
import { DataContext } from "../../context/Dataprovider";
import { ProductosItem } from "./ProductoItem";

export const ProductosLista = () => {
   
    const value = useContext(DataContext)
    const [productos] = value.productos   
   
    return (
     <>
        <h1 className="title"> Productos</h1>
        <div className="productos">
            {
                productos.map(producto=>(
                    <ProductosItem 
                    key={producto.id}
                    id= {producto.id}
                    nombre={producto.nombre}
                    importe= {producto.importe}
                    categoria= {producto.categoria}
                    stock= {producto.stock} 
                    imagen= {producto.imagen}
                    />
                ))
            }
            
        </div>
     </>
    )
}