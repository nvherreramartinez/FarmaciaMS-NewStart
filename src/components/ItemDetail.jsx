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
        <div className="detail-container"> 
            <div className="detail-card"> 
                <h1 className="detail-title">{producto.name}</h1>
                
                <div className="detail-content">
            
                    <img className="detail-img" src={producto.img} alt={producto.name}/>
                    
               
                    <div className="detail-info">
                        <p className="detail-description">
                            <strong>Descripción:</strong> {producto.description}
                        </p>
                        <p className="detail-stock"><strong>Disponibilidad:</strong> {producto.stock} unidades</p>
                        <h2 className="detail-price">${producto.price},00</h2>
                        
                        <div className="detail-actions">
                            {compra 
                            ? (
                                <div className="detail-buttons">
                                    <Link to='/cart' className='btn btn-primary'>Ir al carrito</Link>
                                    <Link to='/' className='btn btn-outline-primary'>Seguir comprando</Link>
                                </div>
                            ) : (
                                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default ItemDetail
