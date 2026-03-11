import React from "react";
import "./Experience.css";

function Experience() {
    const experiences = [
        {
            year: '2024',
            items: [
                "Pengembangan Aplikasi WTA Kementerian Perdagangan",
                "Pengembangan Tes Potensi Pegawai BPSDM Kementerian Hukum dan HAM RI",
                "Pengembangan Aplikasi Manajemen Talenta Komisi Yudisial RI",
                "Pendampingan Pembangunan ZI Kementerian Hukum dan HAM RI",
                "Pelaksanaan Lomba Cerdas HAM Tingkat Nasional Ditjen HAM Kemenkumham",
                "Penyusunan Renstra Inspektorat Jenderal Kementerian ATR/BPN",
                "Pendampingan Evaluasi SAKIP TNI, Mabes TNI",
                "Pengembangan Aplikasi E-SAKIP TNI",
                "Pengembangan Aplikasi Survey SPAK dan SPKP TNI",
                "Pengembangan Aplikasi Uji Kompetensi Kementerian Imigrasi dan Pemasyarakatan",
                "Pelaksanaan Uji Kompetensi Kementerian Imigrasi dan Pemasyarakatan",
            ],
        },
        {
            year: '2025 - Present',
            items: [
                "Pengembangan Aplikasi Kepegawaian Kementerian Imigrasi dan Pemasyarakatan",
                "Penyusunan Dokumen Penjenjangan Kinerja dan Rencana Strategis Kementerian Imigrasi dan Pemasyarakatan",
                "Pendampingan Implementasi SAKIP Kementerian Imigrasi dan Pemasyarakatan",
                "Pengembangan Aplikasi Manajemen Talenta Pemprov Banten",
                "Penyusunan Roadmap Penerapan Sistem Merit dalam Manajemen ASN Pemprov Banten",
                "Pengelolaan dan Pemeliharaan OJS BSK Kementerian Hukum RI",
            ],
        },
    ];

    return (
        <section className="timeline-section">
            <h2 className="timeline-title">Our Experiences:</h2>

            <div className="timeline-container">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                    >
                        <div className="timeline-dot" />

                        <div className="timeline-card">
                            <h3>{exp.year}</h3>
                            <ul>
                                {exp.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;