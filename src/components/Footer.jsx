import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => (
    <footer className="footer" role="contentinfo">
        <div className="footer-content">
            <div className="footer-cta" tabIndex={-1} aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="footer-heading">
                    Contact ABC Company Today
                </h2>
                <p>
                    If you need a custom blend wax or want to purchase white label wax products, ABC Company has a solution for you.<br />
                    Get started today.
                </p>
            </div>
            <Link
                to="/contact"
                className="footer-contact-btn"
                aria-label="Contact us online"
            >
                CONTACT US ONLINE
            </Link>
        </div>
        <div className="footer-bottom">
            &copy; {new Date().getFullYear()} ABC Company. All rights reserved.
        </div>
    </footer>
);

export default Footer;