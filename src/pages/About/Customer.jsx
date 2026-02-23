import React from "react";
import "./Customer.css";

const partners = [
    "/img/BPN.png",
    "/img/bpsdm.png",
    "/img/bsk.png",
    "/img/dishub.png",
    "/img/djham.png",
    "/img/imigrasi.png",
    "/img/ina.png",
    "/img/kumham.png",
    "/img/ky.png",
    "/img/panrb.png",
    "/img/pemasyarakatan.png",
    "/img/perdagangan.png",
];

const Partners = () => {
    return (
        <section className="partners">
            <h3 className="partners-title">Our Customers:</h3>

            <div className="partners-grid">
                {partners.map((logo, index) => (
                    <div className="partner-card" key={index}>
                        <img src={logo} alt="Partner Logo" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;