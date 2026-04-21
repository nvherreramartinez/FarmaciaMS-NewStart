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
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', width: '100%'}}>
                    <h1>{producto.name}</h1>
                    <img className="card-img" src={producto.img} alt={producto.name}/>
                    <p style={{textAlign: 'center'}}><strong>Descripción:</strong> {producto.description}</p>
                    <p>Stock disponible: {producto.stock}</p>
                    <h3>${producto.price},00</h3>
                    
                    <div style={{marginTop: '15px'}}>
                        {compra 
                        ? (
                            <div style={{display: 'flex', gap: '10px'}}>
                                <Link to='/cart' className='btn btn-primary'>Ir al carrito</Link>
                                <Link to='/' className='btn btn-outline-primary'>Seguir comprando</Link>
                            </div>
                        ) : (
                            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
                        )}
                    </div>
                </div>
            </div>
      )
}

export default ItemDetail
