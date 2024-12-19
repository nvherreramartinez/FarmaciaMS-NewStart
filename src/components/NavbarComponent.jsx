import React from "react";
import CartWidget from "./CarWidget";
import { NavLink } from "react-router-dom";

const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <NavLink className="aLink" to='/'>Farmacia MS</NavLink>
            <NavLink className="aLink" to='/producto/laboratorios'>Laboratorios</NavLink>
            <NavLink className="aLink" to='/producto/Ofertas'>Ofertas</NavLink>
            <NavLink className="aLink" to='/producto/obra sociales'>Obras Sociales</NavLink>
            <NavLink className='aLink' to='/cart'><CartWidget counter={15}/></NavLink>
        </nav>
    )
}

export default NavbarComponent