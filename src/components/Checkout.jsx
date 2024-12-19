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
        <>
            {orderId !== '' ? 
                <div className="finish-compra">
                    <h5>Su pedido ha sido registrado. ¡Gracias por su compra!.</h5>
                    <h5>Su número de pedido es: {orderId}</h5>
                    <Link to='/' className='btn btn-success'>Volver a Inicio</Link>
                </div>
                :
                <div>
                    <h3>Ingrese sus datos personales para finalizar la compra</h3>
                    <form className="d-flex flex-column align-items-center" onSubmit={finalizarCompra}>
                        <input type="text" name="name" placeholder="Nombre" onChange={userData} />
                        <input type="text" name="lastname" placeholder="Ingrese su apellido" onChange={userData} />
                        <input type="text" name="address" placeholder="Ingrese su dirección" onChange={userData} />
                        <input type="email" name="email" placeholder="Ingrese su email" onChange={userData} />
                        <input type="email" name="second-mail" placeholder="Repita su mail" onChange={(e) => setValidate(e.target.value)}/>
                        <button className='btn btn-success' type="submit">Enviar</button>
                    </form>
                </div>}
        </>
    )
}
export default Checkout