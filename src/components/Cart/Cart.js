
import classes from './Cart.module.css';
const Cart = () => {
    const cartitems = 
    <ul className={classes['cart-items']}>{
    [{id:'c1',name:'sushi',price:200,amount:2}].map(
        (item) => <li>{item.name}</li>
    ) }</ul>

 return <div>
    {cartitems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.45</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order </button>
    </div>
 </div>
}
export default Cart;