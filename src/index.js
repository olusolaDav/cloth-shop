import React from 'react';
//import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";

import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';

import './index.scss';
import { CartProvider } from './contexts/Cart.context';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
