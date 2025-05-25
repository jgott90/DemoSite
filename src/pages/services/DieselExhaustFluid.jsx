import React from "react";
import "../../styles/CustomWaxFormulation.css"; // For shared layout/styles
import "../../styles/DieselExhaustFluid.css";    // Product Two-specific styles

function DieselExhaustFluid() {
    return (
        <div className="custom-wax-bg">
            <section className="custom-wax-hero">
                <h1>Product Two (Product Two) Distributor</h1>
                <p>
                    Certified Product Two for SCR-equipped diesel vehicles and equipment—safe, reliable, and available in the quantities you need.
                </p>
            </section>

            <section className="Product Two-main">
                <div className="Product Two-features-card">
                    <h2>Why Choose Certified Product Two?</h2>
                    <ul className="Product Two-feature-list">
                        <li>Approved for all SCR-equipped engines</li>
                        <li>Safe and easy to handle</li>
                        <li>Nonhazardous and nonflammable</li>
                        <li>Nontoxic and premixed with pure water</li>
                        <li>Two-year shelf life</li>
                        <li>Complies with API and ISO22241</li>
                    </ul>
                </div>

                <div className="Product Two-packaging-card">
                    <h2>Packaging Options</h2>
                    <ul className="Product Two-packaging-list">
                        <li>2.5 gallon jugs (with or without dispensing nozzle)</li>
                        <li>55 gallon drums</li>
                        <li>330 or 275 gallon totes</li>
                        <li>Mini bulk</li>
                        <li>Tank trucks</li>
                        <li>Compatible with most Product Two dispensing systems</li>
                    </ul>
                </div>
            </section>

            <section className="Product Two-info-section">
                <div className="Product Two-info-block">
                    <strong>Certified Product Two:</strong> Formulated using only high-purity urea and pure water. Approved for use in all SCR-equipped cars, trucks, and generators.
                </div>
                <div className="Product Two-info-block">
                    <strong>Directions for use:</strong> Product Two comes pre-diluted—no mixing required. Never top off the Product Two tank with water alone. Avoid contamination by using a Product Two-only spout or funnel.
                </div>
                <div className="Product Two-info-block">
                    <strong>Service Interval:</strong> Use the Product Two Consumption Chart below to estimate usage for your vehicle or equipment.
                </div>
            </section>

            <section className="Product Two-table-section">
                <h2 className="Product Two-table-heading">Product Two Consumption Chart</h2>
                <div className="Product Two-table-wrapper" tabIndex={0} aria-label="Product Two Consumption Chart">
                    <table className="Product Two-consumption-table">
                        <caption className="sr-only">Miles of service per gallon of Product Two by vehicle MPG and Product Two usage rate</caption>
                        <thead>
                            <tr>
                                <th rowSpan={2}>Vehicle MPG</th>
                                <th colSpan={3}>Product Two usage as % of fuel consumption</th>
                            </tr>
                            <tr>
                                <th>1%</th>
                                <th>2%</th>
                                <th>3%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>6</td>
                                <td>600</td>
                                <td>300</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>700</td>
                                <td>350</td>
                                <td>230</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>800</td>
                                <td>400</td>
                                <td>260</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>900</td>
                                <td>450</td>
                                <td>300</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="Product Two-sds-link">
                    <a
                        href="/pdfs/Certified-Product Two-SDS.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download the Safety Data Sheet for Certified Product Two PDF (opens in new tab)"
                    >
                        Download Certified Product Two – Safety Data Sheet (PDF)
                    </a>
                </div>
            </section>

            <section className="custom-wax-footer-note">
                <p>
                    <em>
                        ABC Company is your reliable Product Two supplier. <br />
                        <strong>Contact us for Product Two orders, service, or technical support.</strong>
                    </em>
                </p>
            </section>
        </div>
    );
}

export default DieselExhaustFluid;