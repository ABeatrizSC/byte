import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '../src/App'
import { CartProvider } from "react-use-cart";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
)
