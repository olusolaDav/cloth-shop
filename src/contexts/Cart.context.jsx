import { createContext, useState } from "react";


const addCartItems = (cartItems, productToAdd) => {
  // find if carItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  //if found, increment quantity
    if (existingCartItem) {
      return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id 
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
      );
    }

  return [...cartItems, {...productToAdd, quantity: 1}]

}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartitems: [],
  addItemToCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd))
  }


  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
