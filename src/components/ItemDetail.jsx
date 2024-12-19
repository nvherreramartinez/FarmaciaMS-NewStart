import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import { CartContext, useCart } from '../context/CartContext'

const ItemDetail = ({producto}) => {
    const [compra, setCompra] = useState(false)
    const {addToCart, cart}= useContext(CartContext)
    
    const onAdd = (quantity)=>{
        setCompra(true)
            let item = {
                name: producto.name,
                img: producto.img,
                price: producto.price,
                stock: producto.stock,
                id: producto.id
            }
        addToCart(item, quantity)
    }
    return (
        <div className="card-item">
            <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center', border: 'solid 2px black', padding: '10px'}}>
                <h1>Detalle del producto: {producto.name}</h1>
                <img className="card-img" src={producto.img} alt={producto.name}/>
                <p>Descripción: {producto.description}</p>
                <p>Stock disponible: {producto.stock}</p>
                <p>${producto.price},00</p>
                <>
                {compra 
                ? 
                <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'wrap', alignItems: 'space', padding: '10px'}}>
                    <Link to='/cart' className='btn btn-primary'>Ir al carrito</Link>
                    <Link to='/' className='btn btn-primary'>Seguir comprando</Link>
                </div> 
                : <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>}
                </>
            </div>
        </div>
    )
}

export default ItemDetail
