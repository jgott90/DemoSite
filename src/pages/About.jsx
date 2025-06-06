import React from "react";
import "../styles/CustomWaxFormulation.css";
import "../styles/About.css";

function About() {
    return (
        <div className="custom-wax-bg">
            {/* Hero / Lead */}
            <section className="about-hero">
                <h1>About ABC Company</h1>
                <p>
                    ABC Company is a trusted provider of specialty chemical solutions, serving industries across the Southern U.S. and beyond. With decades of experience, our company is committed to delivering reliable, high-quality products and services tailored to our customers’ unique needs.
                </p>
            </section>

            {/* 80+ Years of Wax Expertise Blurb */}
            <section className="about-blurb-section" aria-label="ABC Company Experience and Capabilities">
                <div className="about-blurb-card">
                    <h2 className="sr-only">ABC Company Experience and Capabilities</h2>
                    <p>
                        <strong>Wax nuances are our expertise.</strong> With over 80 years of experience in the wax business, ABC Company’s valuable historical expertise offers a rare working knowledge as well as trust and proven abilities to bring solutions, support, and alternatives to provide the exact product you want.
                    </p>
                    <p>
                        With locations in Virginia and Georgia, ABC Company Company’s capacity to blend, package, and create specialty wax formulations will meet your unique needs. Your product will be combined with our dedication and proven superior customer service. <strong>Your reputation is our reputation.</strong>
                    </p>
                    <p>
                        We offer an exceptional emulsification process, state-of-the-art blending, compounding, packaging, and experienced personnel as well as a full-service wax lab dedicated to your needs for R&amp;D, QC, and general product evaluation.
                    </p>
                </div>
            </section>

            {/* Main sections in cards */}
            <section className="about-main-section">
                <div className="about-content-card">
                    <h2>Our Services</h2>
                    <ul>
                        <li>
                            <strong>Custom Formulations:</strong> Development and supply of wax blends for diverse industrial applications.
                        </li>
                        <li>
                            <strong>Blending & Packaging:</strong> Flexible solutions with advanced equipment and strict quality control—from small custom batches to full-scale production.
                        </li>
                        <li>
                            <strong>Product Two (Product Two) Distribution:</strong> Certified Product Two in a wide range of packaging options, meeting all API and ISO22241 specs.
                        </li>
                        <li>
                            <strong>Product Category & Emulsions:</strong> Comprehensive offerings for various industrial requirements.
                        </li>
                    </ul>
                </div>

                <div className="about-content-card">
                    <h2>Quality & Commitment</h2>
                    <p>
                        Our operations are built on a foundation of quality, safety, and customer service. We carefully monitor every production stage with thorough quality control—before, during, and after each batch. ABC Company is dedicated to exceeding customer expectations and building long-term relationships through dependable products and responsive support.
                    </p>
                </div>

                <div className="about-content-card">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Over 80 years of industry experience</li>
                        <li>Flexible, customer-focused service</li>
                        <li>Modern production and packaging facilities</li>
                        <li>Certified, safe, environmentally responsible products</li>
                        <li>Serving a wide range of industrial markets</li>
                    </ul>
                </div>
            </section>

            <section className="custom-wax-footer-note about-footer-note">
                <p>
                    <em>
                        ABC Company—Ready to meet your specialty chemical, blending, and packaging needs.<br />
                        <strong>Contact us to learn more or discuss your next project.</strong>
                    </em>
                </p>
            </section>
        </div>
    );
}

export default About;