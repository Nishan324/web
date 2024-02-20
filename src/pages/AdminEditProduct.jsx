import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getProductDetailsById, updateProductApi } from '../api/api';

const AdminEditProduct = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [oldImage, setOldImage] = useState('');

    useEffect(() => {
        getProductDetailsById(id).then((res) => {
            setOldImage(res.data.productDetail.imageUrl);
            setName(res.data.productDetail.name);
            setBrand(res.data.productDetail.brand);
            setSize(res.data.productDetail.size);
            setPrice(res.data.productDetail.price);
            setDescription(res.data.productDetail.description);
        });
    }, [id]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setProductImage(file);
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('brand', brand);
        formData.append('size', size);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('productImage', productImage);

        updateProductApi(id, formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    navigate('/productList');
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <h1 className="text-center mb-4">Edit Product Details</h1>
                            <img className="w-50 h-50 rounded-circle mx-auto d-block mb-4" src={oldImage} alt="" />
                            <div className="mb-3">
                                <label className="form-label">Product Image</label>
                                <input onChange={handleImageUpload} className="form-control" type="file" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" type="text" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Brand</label>
                                <input value={brand} onChange={(e) => setBrand(e.target.value)} className="form-control" type="text" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Size</label>
                                <input value={size} onChange={(e) => setSize(e.target.value)} className="form-control" type="text" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" type="text" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Edit Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminEditProduct;
