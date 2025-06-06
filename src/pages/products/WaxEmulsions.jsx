import React from "react";
import { Link } from "react-router-dom";
import industries from "../../data/waxEmulsionsIndustries.json";
import waxEmulsionImg from "/images/wax-emulsions.jpg";
import "../../styles/CustomWaxFormulation.css"; // For shared layout/styles
import "../../styles/WaxEmulsions.css";

export default function WaxEmulsions() {
    return (
        <>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <main className="waxemulsions-main" id="main-content">
                <nav aria-label="Breadcrumb" className="waxemulsions-breadcrumbs">
                    <ol>
                        <li><Link to="/">Home</Link> <span aria-hidden="true"> &gt; </span></li>
                        <li><Link to="/products">Products</Link> <span aria-hidden="true"> &gt; </span></li>
                        <li aria-current="page">Product Category</li>
                    </ol>
                </nav>
                <h1 className="waxemulsions-title" tabIndex="-1">Product Category</h1>
                <p className="waxemulsions-desc">
                    ABC Company Company has developed product lines centered around several types of Product Category. Within these emulsions, there are many formulas designed specifically for various types of industries and individual users. Since 1973, Dominion has developed an extensive knowledge of emulsions and strives for excellence in their achievements.
                </p>

                <section className="waxemulsions-content">
                    <div className="waxemulsions-img-col">
                        <img
                            src={waxEmulsionImg}
                            alt="Waxed board samples"
                            className="waxemulsions-img"
                        />
                    </div>
                    <div className="waxemulsions-industries-col">
                        <h2 className="section-title">Industries Served</h2>
                        <ul className="waxemulsions-industries-list">
                            {industries.map(industry => (
                                <li key={industry}>{industry}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <div className="waxemulsions-custom-blends" role="note">
                    ABC Company also custom blends waxes for specific applications.
                </div>
            </main>
        </>
    );
}