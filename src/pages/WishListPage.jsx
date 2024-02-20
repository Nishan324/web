import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar1 from "./navbar";
import Footer from "./footer";
import Panel from "./panel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteWishListApi, getWishListApi } from '../api/api';
import { toast } from 'react-toastify';


const WishlistPage = () => {

    const [wishlist, setWishlist] = useState([])
  const [isUpdated, setIsUpdated] = useState(false)

  useEffect(() => {
    getWishListApi().then((res) => {
      setWishlist(res.data.wishlist)
      console.log(res.data.wishlist)
    }).catch((error) => {
      console.error('Error fetching wishlist items:', error);
    });
  }, [isUpdated])

  const handleDelete = (id) => {
    deleteWishListApi(id).then((res) => {
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
            {wishlist.map(item => (
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
                    <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;