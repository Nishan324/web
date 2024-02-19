// Panel.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/panel.css'
const Panel = () => {
    return (
        <div className="panel">
            {/*<div className="panel-all border">*/}
            {/*    <i className="fa-solid fa-bars"></i>*/}
            {/*    All*/}
            {/*</div>*/}
            {/*<div className="panel-ops border">*/}
                <p></p>
                <p>Customer Service</p>
                <p>Contact Us</p>
                <p>
                    <Link to="/aboutus" className="transparent-button">
                        About Us
                    </Link>
                </p>
                <p>Sell</p>
            {/*</div>*/}
            {/*<div className="panel-deals border">*/}
            {/*    <p>Shop deals in Electronics</p>*/}
            {/*</div>*/}
        </div>
    );
};

export default Panel;
