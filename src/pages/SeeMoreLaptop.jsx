import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProductApi } from '../api/api';
import '../css/see1.css'; // Make sure to adjust the path based on your project structure
import Footer from "./footer";
import Navbar1 from "./navbar";
import Panel from "./panel";


const SeeMoreLaptop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProductApi().then((res) => {
            setProducts(res.data.product);
        });
    }, []);

    const laptopProducts = products.filter(product => product.category === 'Laptop');

    return (
        <div>
            <Navbar1 />
            <Panel />
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-deck overflow-auto">
                            {laptopProducts.map(product => (
                                <div className="card mb-4" key={product._id}>
                                    <Link to="viewP.html" className="box-content-link">
                                        <img
                                            src={product.imageUrl}
                                            className="card-img-top img-fluid"
                                            alt="Product Image"
                                            style={{ maxWidth: '10%', height: 'auto' }}
                                        />
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text"><strong>Price: ${product.price}</strong></p>
                                        <div className="button-container">
                                            <button className="btn btn-outline-danger">
                                                <i className="fa-regular fa-heart"></i> Add to Wishlist
                                            </button>
                                            <button className="btn btn-primary ml-2">
                                                <i className="fa-regular fa-cart-plus"></i> Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SeeMoreLaptop;
