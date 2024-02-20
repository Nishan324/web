import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteProductById, getAllProductApi } from '../api/api';
import Footer from "./footer";
import Navbar1 from "./navbar";
import Panel from "./panel";

const AdminProductList = () => {
    const [product, setProducts] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false)

    useEffect(() => {
        getAllProductApi().then((res) => {
            setProducts(res.data.product);
        });
    }, [isUpdated]);

    const handleDelete = (id) => {
        deleteProductById(id).then((res) => {
            if (res.data.success) {
                setIsUpdated((v) => !v)
                toast.success(res.data.message)
            }
            else {
                toast.error(res.data.message)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div style={{ minHeight: '100vh' }}>
            <Navbar1 />
            <Panel />
            <div className="container mt-4">
                <h1>Admin Panel</h1>
                <hr />
                <h2>Products</h2>
                <div className="row">
                    <div className="col-md-10">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Brand</th>
                                        <th>Size</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.map(product => (
                                        <tr>
                                            <td>
                                                <img
                                                    src={product.imageUrl}
                                                    className="img-fluid rounded-start"
                                                    alt="Product Image"
                                                    style={{ maxWidth: '50px', maxHeight: '50px' }}
                                                />
                                            </td>
                                            <td>
                                                <span>{product.name}</span>
                                            </td>
                                            <td>
                                                <span>{product.brand}</span>
                                            </td>
                                            <td>
                                                <span>{product.size}</span>
                                            </td>
                                            <td>
                                                <span>{product.category}</span>
                                            </td>
                                            <td>
                                                <span>{product.price}</span>
                                            </td>
                                            <td>
                                                <span>{product.description}</span>
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(product._id)} className="btn btn-danger">
                                                    Delete
                                                </button>
                                                <Link to={`/editProduct/${product._id}`} className="btn btn-primary ml-2">
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminProductList;