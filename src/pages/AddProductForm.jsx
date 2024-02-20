import React, { useState } from 'react';
import Navbar1 from './navbar';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import {createProductApi} from '../api/api'
import { toast } from 'react-toastify';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setProductImage(file);
    // setPreviewImage(URL.createObjectURL(file));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('name', name)
    formData.append('brand', brand)
    formData.append('size', size)
    formData.append('category', category)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('productImage', productImage)
    createProductApi(formData).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message)
      } else {
        toast.error(res.data.message)
      }
    }).catch((err) => {
      console.log("Error: ", err);
    })
  };

  return (
    <div>
      <Navbar1 />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Add Product</h1>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Label>Product Title</Form.Label>
              <Form.Control type="text" placeholder="Enter product title" name="ptitle" onChange={(e)=> setName(e.target.value)} required />
            </Col>
            <Col>
              <Form.Label>Manufacturer Brand</Form.Label>
              <Form.Control type="text" placeholder="Enter brand name" name="BName" onChange={(e)=> setBrand(e.target.value)} required />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Size</Form.Label>
              <Form.Control as="select" name="size" onChange={(e)=> setSize(e.target.value)}>
                <option>Select size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="ELarge">Extra Large</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" name="PCategories" onChange={(e)=> setCategory(e.target.value)}>
                <option>Select category</option>
                <option value="Mobile">Mobile</option>
                <option value="Laptop">Laptop</option>
                <option value="Watch">Watch</option>
                {/* Add other categories */}
              </Form.Control>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="text" placeholder="Enter product price" name="PPrice" onChange={(e)=> setPrice(e.target.value)} required />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter product description" name="PDesc" onChange={(e)=> setDescription(e.target.value)} required />
            </Col>
          </Row>

          <div className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" name="image" accept="image/jpeg, image/png, image/jpg" onChange={handleImageUpload} />
          </div>

          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default AddProductForm;
