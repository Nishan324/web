// Navbar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faLocationDot, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
// import CartPanel from "./cartPanle"; // Corrected import
// import CartPanel from './cartpanel';
import "../css/navbar.css"


// import 'C://Users//hp//Desktop//webapiassigmrnt//frontend-31a-Nishan324//src//css//cartPanel.css'

import {Link, useNavigate} from 'react-router-dom';
// import "C://Users//hp//Desktop//webapiassigmrnt//frontend-31a-Nishan324//src//css//navbar.css"


const Navbar1 = () => {
    // const [showLogin, setShowLogin] = useState(false);

    const navigate = useNavigate();

    const handleSignInClick = () => {
        // Navigate to the login page
        navigate('/login');
    };
    // const [isCartOpen, setIsCartOpen] = useState(false);
    //
    // const openCartPanel = () => {
    //     setIsCartOpen(true);
    // };
    //
    // const closeCartPanel = () => {
    //     setIsCartOpen(false);
    // };
    return (
        // <div className="nav">
        <div className="navbar1">
            <div className="nav-logo border1">
                <div className="logo12">

                </div>
            </div>

            <div className="nav-address border">
                <p className="add-first12">Delivery to</p>
                <div className="add-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="add-second">KTM</p>
                </div>
            </div>


            <div className="nav-search12">
                <select className="search-select12">
                    <option value="all">All</option>
                    <option value="option1">Mobile Phone</option>
                    <option value="option2">Laptop</option>
                    <option value="option2">Tablet</option>
                    <option value="option2">Smart Watches</option>
                </select>

                <input
                    placeholder="Search Thrifty Techs"
                    className="search-input"
                />
                <div className="search-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>



            <div className="nav-login">
                <button onClick={handleSignInClick}>Hello, Sign in</button>
                <Link to="/accounts">
                    <button>Accounts</button>
                </Link>
            </div>


            <div className="nav-return border">
                <p><span>Returns</span></p>
                <p className="nav-second border">& Order</p>
            </div>
            <div className="nav-cart border">
                {/*<button className="cart-button" onClick={openCartPanel} style={{cursor: 'pointer'}}>*/}
                    <FontAwesomeIcon icon={faCartShopping} /> {/* Cart icon */}
                    Cart
                {/*</button>*/}
            </div>
            {/*<CartPanel isOpen={isCartOpen} onOpen={openCartPanel} onClose={closeCartPanel} />*/}
        </div>
        // </div>
    );
};

export default Navbar1;