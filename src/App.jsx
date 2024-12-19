import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavbarReactBootstrap from './components/NavbarReactBoostrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error'
import { CartProvider } from './context/CartContext'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'


function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavbarReactBootstrap/>
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la Farmacia del Ministerio!'/>}/>
                    <Route path='category/:categoryId' element={<ItemListContainer greeting='Bienvenidos a la Farmacia del Ministerio!'/>}/>
                    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/:cart' element={<CartContainer/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App