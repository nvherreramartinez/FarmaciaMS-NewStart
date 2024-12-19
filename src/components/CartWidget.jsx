import { IoCart } from 'react-icons/io5';
import { Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
    const {cart} = useContext(CartContext)
    const {cartQuantity} = useContext(CartContext)

    return (
        <div className='CartWidgetContainer'>
            <IoCart fontSize={'1.8rem'} color="white" />
            {cartQuantity() > 0 && <Badge bg="info">{cartQuantity()}</Badge>}
            
        </div>
    )
};

export default CartWidget
