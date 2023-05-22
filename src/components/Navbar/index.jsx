import React from "react";
import Cart from '../Cart'
export const Navbar =()=>{
    return(
        <div className="container">
        <nav className="nav">
        <div className="nav_brand">
        <a className="nav_link" href="#">Mi Marca</a>
        </div>
        <ul className="nav_list">
        <li className="Nav_link" href="#">Categoria 1</li>
        <li className="Nav_link" href="#">Categoria 2</li>
        <li className="Nav_link" href="#">
        <Cart/>
        </li>
        </ul>
        </nav>
        </div>
    );
}
export default Navbar;