import { Link } from 'react-router-dom';
import '../css/see1.css';
import Navbar1 from "./navbar";
import Footer from "./footer";
import Panel from "./panel";
import 'bootstrap/dist/css/bootstrap.min.css';
import images from "../images/ip11PMax.png";
 
const ProductCard = () => (
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
      <h5 className="card-title">Iphone 11 pro max</h5>
      <p className="card-text"></p>
      <div className="button-container">
        <button className="btn btn-outline-danger" >
          <i className="fa-regular fa-heart"></i> Add to Wishlist
        </button>
        <button className="btn btn-primary ml-2" >
          <i className="fa-regular fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  </div>
);
 
const SeeMore = () => {
  const products = [
    { id: 1, title: 'Product Title 1', description: 'Product description goes here.' },
    // Add more product data
  ];
 
  return (
    <div>
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
                  addToWishlist={() => console.log('Add to Wishlist')}
                  addToCart={() => console.log('Add to Cart')}
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