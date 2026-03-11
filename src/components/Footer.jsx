import React from "react";
import {
    FaWhatsapp,
    FaInstagram,
    FaEnvelope,
    FaLinkedinIn,
    FaHome,
    FaUser,
    FaBriefcase,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGraduationCap
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-col brand">
                    <div className="logo">
                        <img src="/img/rekonesia-logo-only.png" alt="Rekonesia Logo" />
                        <div>
                            <h2>PT REKONESIA</h2>
                            <small>For a more advance indonesia</small>
                        </div>
                    </div>
                    <p>
                        A trusted partner in developing professional <br />
                        digital solutions for your business. Turn ideas into digital reality.
                    </p>

                    <h4>Follow Us</h4>
                    <div className="socials">
                        <a href="#"><FaWhatsapp /></a>
                        <a href="#"><FaEnvelope /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><FaHome /> home</li>
                        <li><FaUser /> About</li>
                        <li><FaBriefcase /> Services</li>
                        <li><FaEnvelope /> Contact</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <h3>Contact Us</h3>
                    <p>Metropolitan Tower Lantai 13-A
                        Jl. RA Kartini - TB Simatupang Kav. 14
                        Cilandak, Jakarta Selatan
                        DKI Jakarta 12430</p>
                    <p><FaPhoneAlt /> +622-121-693-752</p>
                    <p><FaEnvelope /> sapa[at]rekonesia.co.id</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Rekonesia. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;