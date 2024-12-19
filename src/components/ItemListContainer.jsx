import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/firebase'


const ItemListContainer = ({greeting}) => {
    const[item, setItem] = useState([])
    const [loading, setLoading]= useState(false)
    const {categoryId} = useParams()

useEffect(()=>{
    setLoading(true)
    const prodCollection = categoryId 
    ? query (collection (db, "vademecum"), where ("categoryId", "==", categoryId))
    : collection (db, "vademecum")
    getDocs(prodCollection)
    .then((res)=> {
        const list = res.docs.map((products)=>{
            return{
                id: products.id,
                ...products.data()
            }
        })
        setItem(list)
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
},[categoryId])

    return (
        <div>
        <h1 className="text-center">{greeting}</h1>
        {loading 
        ? <Loader/> 
        : <ItemList item={item}/>}
        </div>
    )
}

export default ItemListContainer
