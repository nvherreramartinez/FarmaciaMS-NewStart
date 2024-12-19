import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({producto}) => {
    const {removeItem} = useContext(CartContext)
    return (
        <div className="card-check">
            <img className="card-img" src = {producto.img} alt = {producto.name}/>
            <span className="card-name">{producto.name}</span>
            <span className="card-cantidad">Unidades: {producto.cantidad}</span>
            <span className="card-price">${producto.price},00</span>
            <span className="card-final-price">Precio final: ${producto.cantidad * producto.price},00</span>
            <button className= 'btn btn-danger' onClick={() => removeItem(producto.id)}>X</button>
        </div>
    )
}
export default CartItem