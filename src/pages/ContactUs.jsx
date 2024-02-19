import React, { useState } from 'react';
import Navbar1 from "./navbar";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

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
        <h1 className="text-center">Product Details</h1>

        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              {/* Rest of the form code... */}
            </div>

            <div className="col-md-6">
              {/* Rest of the form code... */}
            </div>
          </div>

          <div className="mb-3">
            <Form.Group controlId="formImage">
              <img src={product.image} alt="UserPic" className="img-thumbnail" id="profile-image1" />
              <Form.Control type="file" name="image" accept="image/jpeg, image/png, image/jpg" onChange={handleImageChange} />
            </Form.Group>
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
