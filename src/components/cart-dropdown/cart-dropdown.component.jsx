import {useContext} from "react";

import { CartContext } from "../../contexts/Cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";


const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      {cartItems.map(item =>(
        <CartItem key={item} cartItem={item} />        
      ))}

      <Button>GO TO CHECKOUT</Button>
    </div>
);
}
export default CartDropdown;
