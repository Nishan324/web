import React from 'react';
import { Link } from 'react-router-dom';
import '../css/see1.css';
import Navbar1 from "./navbar";
import Footer from "./footer";
import Panel from "./panel";
import 'bootstrap/dist/css/bootstrap.min.css';
import images from "../images/ip11PMax.png";

const ProductCard = ({ title, description, price, addToWishlist, addToCart }) => (
  <div className="card mb-4">
    <Link to="viewP.html" className="box-content-link">
      <img
        src={images}
        className="card-img-top img-fluid"
        alt="Product Image"
        style={{ maxWidth: '10%', height: 'auto' }}
      />
    </Link>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text"><strong>Price: ${price}</strong></p>
      <div className="button-container">
        <button className="btn btn-outline-danger" onClick={addToWishlist}>
          <i className="fa-regular fa-heart"></i> Add to Wishlist
        </button>
        <button className="btn btn-primary ml-2" onClick={addToCart}>
          <i className="fa-regular fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const SeeMore = () => {
  const products = [
    { id: 1, title: 'Samsung Galaxy S21', description: 'Premium flagship smartphone with stunning display and powerful camera features.', price: 799.99 },
    { id: 2, title: 'iPhone 13 Pro', description: 'The latest iPhone with advanced A15 Bionic chip, ProMotion display, and enhanced camera system.', price: 1099.99 },
    { id: 3, title: 'Google Pixel 6', description: 'Flagship Pixel device with exceptional camera capabilities and the latest Android experience.', price: 699.99 },
    { id: 4, title: 'OnePlus 9T', description: 'Powerful OnePlus device with fast charging, smooth OxygenOS, and high-refresh-rate display.', price: 899.99 },
    { id: 5, title: 'Xiaomi Mi 11', description: 'Premium Xiaomi phone featuring Snapdragon 888, high-resolution display, and versatile camera setup.', price: 799.99 },
    { id: 6, title: 'Sony Xperia 5 III', description: 'Compact Sony phone with a powerful camera, 120Hz display, and advanced audio features.', price: 999.99 },
    // Add more product data
  ];

  return (
    <div>
      <Navbar1 /> {/* Include the Navbar1 component here */}
      <Panel />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-12">
            <div className="card-deck overflow-auto">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  addToWishlist={() => console.log(`Add ${product.title} to Wishlist`)}
                  addToCart={() => console.log(`Add ${product.title} to Cart`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeeMore;
