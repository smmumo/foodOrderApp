import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {

    cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
      cartCtx.addItem({
        id:props.id,
        name: props.name,
        amount: props.amount,
        price: props.price
      })
    }

  return <li>
    <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
    </div>
    <div>
        <MealItemForm  onAddToCart={addToCartHandler} id={props.id}/>
    </div>
  </li>
}
export default MealItem;