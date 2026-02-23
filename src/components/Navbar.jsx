import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Import file CSS biasa
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
            <div className="container">
                <div className="logo">
                    <img src="/img/rekonesia-logo-only.png" alt="Rekonesia Logo" />
                    <h1>REKONESIA</h1>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/service">Service</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
