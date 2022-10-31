
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {
    cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartitems = 
    <ul className={classes['cart-items']}>{
         cartCtx.items.map(
        (item) => <li>{item.name}</li>
    ) }</ul>

 return (
        <Modal onClose={props.onClose}>
        {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
           {hasItems && <button className={classes.button}>Order </button>}
        </div>
        </Modal>
    )
}
export default Cart;

//https://swapi.dev/
//https://swapi.py4e.com/