import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import EmpyCart from "./EmpyCart"
import { Link } from "react-router-dom"

const CartContainer = () => {
    const{cart, cartTotal, clear} = useContext(CartContext)
    return (
        <div>
        {!cart.length ? <EmpyCart/>
        : <div className="cartWidgetContainer">
                <h2>Tu carrito</h2>
                {cart.map((producto) => <CartItem key={producto.id} producto={producto}/>)}
                <span>Monto total de su compra: ${cartTotal()}</span>
                <div>
                    <button className="btn btn-danger" onClick={clear}>Borrar carrito</button>
                    <Link className='btn btn-success' to='/checkout'>Finalizar Compra</Link>
                </div>
            </div>
            }
        </div>
    )
}
export default CartContainer