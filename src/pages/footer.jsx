import logoImage from '../images/logoo.png';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "../css/footer.css";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <img
                    src={logoImage}
                    alt="Company Logo"
                    style={{ maxWidth: '30%', height: 'auto' }} // Adjust the percentage as needed
                />
                <p className="footer-links">
                    <a href="#" className="link-1">Home</a>
                    <a href="#">Blog</a>
                    <a href="#">Pricing</a>
                    <a href="#">About</a>
                    <a href="#">Faq</a>
                    <a href="#">Contact</a>
                </p>
                <p className="footer-company-name">Gadget B@zar © 2023</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Dilibazar, PipalBot</span> Kathmandu, Nepal</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+977 9815918064</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="gadgetb@zar.com">gadgetb@zar.com.com</a></p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <h2>About the company</h2>
                    Get your best shopping experience
                </p>
                <div className="footer-icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>
                </div>
            </div>
            <div className="foot-panel12" onClick={scrollToTop}>
                Back to Top
            </div>
        </footer>
    );
}

export default Footer;
