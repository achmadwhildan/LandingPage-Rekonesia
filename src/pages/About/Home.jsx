import React from "react";
import "./Home.css";
import { FaPhoneAlt, FaCogs, FaSmile, FaHandshake, FaAward } from "react-icons/fa";

const Home = () => {

    return (
        <>
            <section className="home">
                <div className="home-overlay"></div>
                <div className="home-content">
                    <h1>Transforming Organizations Through Technology</h1>
                    <p>
                        Mendorong transformasi digital sektor publik dan swasta
                        melalui solusi teknologi inovatif, tata kelola yang kuat,
                        dan strategi berbasis kinerja.
                    </p>

                    <div className="btn">
                        <button className="btn-contact">
                            <FaPhoneAlt /> Contact
                        </button>
                        <button className="btn-service">
                            <FaCogs /> Service
                        </button>
                    </div>
                </div>
            </section>

            <section className="values">
                <p className="values-desc">
                    These values are base of our acts and decisions, which will
                    bring <strong>REKONESIA</strong> as local company to global community
                </p>

                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon"><FaSmile /></div>
                        <h3>Humble</h3>
                        <span>Friendly</span>
                        <span>Open Minded</span>
                        <span>Synergy</span>
                        <span>Learns</span>
                    </div>

                    <div className="value-card">
                        <div className="value-icon"><FaHandshake /></div>
                        <h3>Integrity</h3>
                        <span>Trustworthy</span>
                        <span>Commit</span>
                        <span>Professional</span>
                    </div>

                    <div className="value-card">
                        <div className="value-icon"><FaAward /></div>
                        <h3>Strive for Excellence</h3>
                        <span>High Achiever</span>
                        <span>Discipline</span>
                        <span>Persistent</span>
                        <span>Adaptive</span>
                        <span>Innovative</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;