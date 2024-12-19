import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <div className="card-container" >
            <img src={producto.img} className="card-img" alt={producto.name}/>
            <div className="card-body">
                <h5 className="card-name">{producto.name}</h5>
                <p className="card-price">${producto.price},00</p>
                <p className="card-cantidad">Stock:{producto.stock} unidades.</p>
                <Link to={`/item/${producto.id}`} className="btn btn-dark">Ver más</Link>
            </div>
        </div>
    )
}
export default Item
