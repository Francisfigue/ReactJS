import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div>
                <h1 className="titulo"> Dietetica</h1>
            </div>
            <ul>
                <li>
                    <Link to="/"> Inicio</Link>
                </li>
                <li>
                    <Link to="/productos"> Productos</Link>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
        </header>
    )
}