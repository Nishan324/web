import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar1 from "./navbar";
import Footer from "./footer";
import Panel from "./panel";
import 'bootstrap/dist/css/bootstrap.min.css';
import images from "../images/ip11PMax.png";
 
const CartItem = ({ id, title, quantity, price, removeFromCart, updateQuantity }) => (
  <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src={images}
          className="img-fluid rounded-start"
          alt="Product Image"
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Quantity: {quantity}</p>
          <p className="card-text">Price: ${price}</p>
          <div className="btn-group" role="group">
            <button className="btn btn-secondary" onClick={() => updateQuantity(id, quantity - 1)} disabled={quantity === 1}>
              -
            </button>
            <button className="btn btn-secondary" onClick={() => updateQuantity(id, quantity + 1)}>
              +
            </button>
          </div>
          <button className="btn btn-danger ml-2" onClick={() => removeFromCart(id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
);
 
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Product Title 1', quantity: 2, price: 30.99 },
    // Add more cart item data
  ]);
 
  const removeFromCart = (productId) => {
    // Implement logic to remove item from the cart
    setCartItems(cartItems.filter(item => item.id !== productId));
  };
 
  const updateQuantity = (productId, newQuantity) => {
    // Implement logic to update quantity of an item in the cart
    setCartItems(cartItems.map(item => (item.id === productId ? { ...item, quantity: newQuantity } : item)));
  };
 
  return (
    <div>
      <Navbar1 />
      <Panel />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                quantity={item.quantity}
                price={item.price}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cart Summary</h5>
                <p className="card-text">Total Items: {cartItems.length}</p>
                <p className="card-text">
                  Total Price: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </p>
                <Link to="#" className="btn btn-primary">Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
 
export default CartPage;