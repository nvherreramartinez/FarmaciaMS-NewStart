import React from "react"
import { Link } from "react-router-dom"

const EmpyCart = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <h2>Tu carrito esta vacio... 😔 </h2>
            <h3>¡Te invitamos a seguir descubriendo nuestro catálogo!</h3>
            <Link to='/' className='btn btn-dark'>Ir a comprar</Link>
        </div>
    )
} 

export default EmpyCart