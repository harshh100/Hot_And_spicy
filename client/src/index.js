import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/Itmcontext';
import { CartProvider } from './context/cart_context';
import { OrderProvider } from './context/Order_context';
import { AdminProvider } from './context/AdminContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AdminProvider>
    <CartProvider>
      <AppProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </AppProvider>
    </CartProvider>
  </AdminProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
