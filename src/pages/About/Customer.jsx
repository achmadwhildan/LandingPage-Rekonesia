import React from "react";
import "./Customer.css";

const partners = [
    { logo: "/img/BPN.png", name: "Badan Pertanahan Nasional" },
    { logo: "/img/bpsdm.png", name: "BPSDM" },
    { logo: "/img/bsk.png", name: "BSK" },
    { logo: "/img/dishub.png", name: "Dinas Perhubungan" },
    { logo: "/img/djham.png", name: "Ditjen HAM" },
    { logo: "/img/imigrasi.png", name: "Imigrasi" },
    { logo: "/img/ina.png", name: "TNI" },
    { logo: "/img/kumham.png", name: "Kemenkumham" },
    { logo: "/img/ky.png", name: "Komisi Yudisial" },
    { logo: "/img/panrb.png", name: "KemenPAN-RB" },
    { logo: "/img/pemasyarakatan.png", name: "Pemasyarakatan" },
    { logo: "/img/perdagangan.png", name: "Kemendag" },
];

const Partners = () => {
    return (
        <section className="partners">
            <h3 className="partners-title">Our Customers:</h3>

            <div className="partners-grid">
                {partners.map((partner, index) => (
                    <div className="partner-card" key={index}>
                        <img src={partner.logo} alt={partner.name} />
                        <div className="partner-overlay">
                            <span className="partner-name">{partner.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;