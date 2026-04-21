import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import EmpyCart from "./EmpyCart"
import { Link } from "react-router-dom"

const CartContainer = () => {
    const{cart, cartTotal, clear} = useContext(CartContext)
    return (
        <div className="cart-list-container"> 
            {!cart.length ? <EmpyCart />
                : <div>
                    <h2>Tu carrito</h2>
                    {cart.map((producto) => <CartItem key={producto.id} producto={producto} />)}
                    <div className="cart-footer"> 
                        <span className="total-amount">Monto total de su compra: ${cartTotal()},00</span>
                        <div className="cart-buttons">
                            <button className="btn btn-danger" onClick={clear}>Borrar carrito</button>
                            <Link className='btn btn-success' to='/checkout'>Finalizar Compra</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default CartContainer
