// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/see1.css';  // Make sure to adjust the path based on your project structure
// import Navbar1 from "./navbar";
// import Footer from "./footer";
// import Panel from "./panel";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import laptop from "../images/laptop1.jpg";  // Replace with actual paths to laptop images

// const LaptopCard = ({ title, description, price, addToWishlist, addToCart }) => (
//   <div className="card mb-4">
//     <Link to="viewLaptop.html" className="box-content-link">
//       <img
//         src={laptopImages}
//         className="card-img-top img-fluid"
//         alt="Laptop Image"
//         style={{ maxWidth: '10%', height: 'auto' }}
//       />
//     </Link>
//     <div className="card-body">
//       <h5 className="card-title">{title}</h5>
//       <p className="card-text">{description}</p>
//       <p className="card-text"><strong>Price: ${price}</strong></p>
//       <div className="button-container">
//         <button className="btn btn-outline-danger" onClick={addToWishlist}>
//           <i className="fa-regular fa-heart"></i> Add to Wishlist
//         </button>
//         <button className="btn btn-primary ml-2" onClick={addToCart}>
//           <i className="fa-regular fa-cart-plus"></i> Add to Cart
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const SeeMoreLaptop = () => {
//   const laptops = [
//     { id: 1, title: 'Dell XPS 13', description: 'Thin and powerful laptop with a stunning display.', price: 1299.99 },
//     { id: 2, title: 'MacBook Air', description: 'Lightweight and stylish laptop with Apples M1 chip.', price: 999.99 },
//     { id: 3, title: 'HP Spectre x360', description: 'Convertible laptop with a sleek design and impressive performance.', price: 1199.99 },
//     { id: 4, title: 'Lenovo ThinkPad X1 Carbon', description: 'Business-focused laptop with a durable build and strong performance.', price: 1499.99 },
//     { id: 5, title: 'Asus ROG Zephyrus G14', description: 'Gaming laptop with a powerful AMD Ryzen processor and NVIDIA GPU.', price: 1599.99 },
//     { id: 6, title: 'Surface Laptop 4', description: 'Microsofts premium laptop with a high-resolution PixelSense display.', price: 1299.99 },
//     // Add more laptop data
//   ];

//   return (
//     <div>
//       <Navbar1 />
//       <Panel />
//       <div className="container-fluid mt-4">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="card-deck overflow-auto">
//               {laptops.map(laptop => (
//                 <LaptopCard
//                   key={laptop.id}
//                   title={laptop.title}
//                   description={laptop.description}
//                   price={laptop.price}
//                   addToWishlist={() => console.log(`Add ${laptop.title} to Wishlist`)}
//                   addToCart={() => console.log(`Add ${laptop.title} to Cart`)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SeeMoreLaptop;
