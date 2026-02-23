import React from "react";
import "./VisiMisi.css";

const VisiMisi = () => {
    const misiItems = [
        {
            title: "Reformasi Birokrasi",
            text: "Membantu implementasi kebijakan pemerintah melalui jasa profesionalisme konsultansi manajemen, pendampingan dan pemanfaatan teknologi informasi terkait reformasi birokrasi, pelayanan publik, dan implementasi SAKIP."
        },
        {
            title: "Mendorong Inovasi",
            text: "Mendorong inovasi dalam industri IT dengan menyediakan platform dan lingkungan yang mendukung bagi individu, start-up dan perusahaan untuk mengembangkan ide-ide kreatif dan solusi teknologi yang baru."
        },
        {
            title: "Keamanan & Privasi",
            text: "Berkomitmen untuk menjaga keamanan dan privasi data melalui penerapan teknologi yang canggih, kebijakan yang ketat, dan praktik terbaik dalam mengelola informasi pelanggan dan bisnis."
        },
        {
            title: "Aksesibilitas Teknologi",
            text: "Berusaha meningkatkan aksesibilitas teknologi di seluruh Indonesia, termasuk daerah terpencil, dengan menyediakan solusi yang terjangkau dan mudah digunakan bagi semua lapisan masyarakat."
        },
        {
            title: "Mitra Terpercaya",
            text: "Berusaha menjadi mitra terpercaya bagi klien dengan menyediakan layanan yang handal, responsif, dan mengutamakan kepuasan pelanggan dalam setiap aspek layanan."
        },
        {
            title: "Kemajuan Bangsa",
            text: "Bertekad berkontribusi pada kemajuan bangsa Indonesia melalui dukungan Reformasi Birokrasi, pengembangan teknologi berkelanjutan, kerja sama lembaga pemerintah, dan keterlibatan dalam program sosial."
        }
    ];

    return (
        <div className="vm-root">
            <div className="vm-container">

                <div className="vm-header">
                    <span className="vm-header-label">Identitas Perusahaan</span>
                    <h1>Visi & Misi</h1>
                    <div className="vm-header-line" />
                </div>

                {/* VISI */}
                <div className="vm-visi">
                    <div className="vm-section-tag">Visi</div>
                    <div className="vm-visi-inner">
                        <div className="vm-corner tl" />
                        <div className="vm-corner tr" />
                        <div className="vm-corner bl" />
                        <div className="vm-corner br" />
                        <p className="vm-visi-text">
                            Menjadi Perusahaan Konsultan Manajemen dan IT terkemuka di Indonesia
                            yang bertujuan untuk mencapai Indonesia lebih baik melalui
                            Restorasi Teknologi
                        </p>
                    </div>
                </div>

                {/* MISI */}
                <div className="vm-misi">
                    <div className="vm-section-tag">Misi</div>
                    <ul className="vm-misi-list">
                        {misiItems.map((item, i) => (
                            <li key={i} className="vm-misi-item">
                                <span className="vm-misi-num">0{i + 1}</span>
                                <div className="vm-misi-text">
                                    <span className="vm-misi-title">{item.title}</span>
                                    {item.text}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default VisiMisi;