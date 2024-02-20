import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteCartApi, getCartListApi } from '../api/api';
import Footer from "./footer";
import Navbar1 from "./navbar";
import Panel from "./panel";

const CartPage = () => {
  const [cart, setCart] = useState([])
  const [isUpdated, setIsUpdated] = useState(false)

  useEffect(() => {
    getCartListApi().then((res) => {
      setCart(res.data.cart)
      console.log(res.data.cart)
    }).catch((error) => {
      console.error('Error fetching cart items:', error);
    });
  }, [isUpdated])

  const handleDelete = (id) => {
    deleteCartApi(id).then((res) => {
      if (res.data.success) {
        setIsUpdated((v) => !v)
        toast.success(res.data.message)
      } else {
        toast.error(res.data.message)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <Navbar1 />
      <Panel />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            {cart.map(item => (
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.to.imageUrl}
                      className="img-fluid rounded-start"
                      alt="Product Image"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.to.name}</h5>
                      <p className="card-text">Brand: {item.to.brand}</p>
                      <p className="card-text">Price: ${item.to.price}</p>
                      {/* <div className="btn-group" role="group">
                        <button className="btn btn-secondary" onClick={() => updateQuantity(id, quantity - 1)} disabled={quantity === 1}>
                          -
                        </button>
                        <button className="btn btn-secondary" onClick={() => updateQuantity(id, quantity + 1)}>
                          +
                        </button>
                      </div> */}
                      <button className="btn btn-danger ml-2" onClick={() => handleDelete(item._id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cart Summary</h5>
                <p className="card-text">Total Items: </p>
                <p className="card-text">
                  {/* Total Price: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} */}
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