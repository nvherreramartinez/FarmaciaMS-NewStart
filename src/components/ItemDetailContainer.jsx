import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
    const [producto, setProducto]= useState([])
    const [loading, setLoading]=useState(false)
    const {id} = useParams()
    
    useEffect(()=>{
        setLoading(true)
        const collectionProd = collection(db, "vademecum")
        const docRef = doc(collectionProd, id)
        getDoc(docRef)
        .then((res)=> setProducto({id: res.id, ...res.data()}))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            {loading 
            ? <Loader/> 
            : <ItemDetail producto={producto}/>}
        </div>
    )
}

export default ItemDetailContainer
