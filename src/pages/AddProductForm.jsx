import React, { useState } from 'react';
import Navbar1 from './navbar';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    pid: '',
    ptitle: '',
    BName: '',
    size: 'Null',
    PCategories: 'Null',
    PPrice: '',
    PDesc: '',
    image: '/images/upload.png', // Set the default image path
  });

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({
        ...product,
        image: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Product submitted:', product);
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
              <Form.Control type="text" placeholder="Enter product title" name="ptitle" value={product.ptitle} onChange={handleInputChange} required />
            </Col>
            <Col>
              <Form.Label>Manufacturer Brand</Form.Label>
              <Form.Control type="text" placeholder="Enter brand name" name="BName" value={product.BName} onChange={handleInputChange} required />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Size</Form.Label>
              <Form.Control as="select" name="size" value={product.size} onChange={handleInputChange}>
                <option value="Null">Select size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="ELarge">Extra Large</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" name="PCategories" value={product.PCategories} onChange={handleInputChange}>
                <option value="Null">Select category</option>
                <option value="Clothing">Clothing</option>
                {/* Add other categories */}
              </Form.Control>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="text" placeholder="Enter product price" name="PPrice" value={product.PPrice} onChange={handleInputChange} required />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter product description" name="PDesc" value={product.PDesc} onChange={handleInputChange} required />
            </Col>
          </Row>

          <div className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" name="image" accept="image/jpeg, image/png, image/jpg" onChange={handleImageChange} />
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
