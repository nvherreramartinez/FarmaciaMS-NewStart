import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "../services/firebase"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"


const Checkout = () => {
    const [user, setUser] = useState({})
    const [validate, setValidate] = useState('')
    const [orderId, setOrderId] =useState('')
    const {cart, cartTotal, clear}= useContext(CartContext)
    const userData = (e)=>{
        setUser(
            {
                ...user, 
                [e.target.name]:e.target.value
            }
        )
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.name || !user.lastname || !user.address || !user.email){
            Swal.fire({
                title: "Atención!",
                text: "Todos los campos son obligatorios.",
                icon: "error"
            });
        }else if(user.email !== validate){
            Swal.fire({
                title: "¡Importante!",
                text: "Ambos emails debe ser iguales.",
                icon: "warning"
            });
        }else{
            let orders = {
                buyer: user,
                cart: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, orders)
            .then((res)=>{
                //cart.forEach((item)=>{
                //    const docRef = doc(db, "vademecum", item.id)
                //    getDoc(docRef)
                //    .then((dbDoc)=>{
                 //       updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                 //   })
                //})
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }
    return (
        <div className="checkout-container"> {/* Agregamos el contenedor principal */}
            {orderId !== '' ? 
                <div className="finish-compra-container"> {/* Clase para el mensaje final */}
                    <h3>¡Gracias por tu compra!</h3>
                    <h5>Su pedido ha sido registrado con éxito.</h5>
                    <p className="order-number">Número de pedido: <span>{orderId}</span></p>
                    <Link to='/' className='btn btn-success'>Volver al Inicio</Link>
                </div>
                :
                <div>
                    <h3>Finalizar Compra</h3>
                    <p>Por favor, ingrese sus datos para procesar el pedido.</p>
                    <form className="checkout-form" onSubmit={finalizarCompra}>
                        <input type="text" name="name" placeholder="Nombre" onChange={userData} />
                        <input type="text" name="lastname" placeholder="Apellido" onChange={userData} />
                        <input type="text" name="address" placeholder="Dirección" onChange={userData} />
                        <input type="email" name="email" placeholder="Email" onChange={userData} />
                        <input type="email" name="second-mail" placeholder="Repita su email" onChange={(e) => setValidate(e.target.value)}/>
                        <button className='btn-enviar' type="submit">Generar Orden</button>
                    </form>
                </div>
            }
        </div>
    )
}
export default Checkout
