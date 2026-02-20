import "./Services.css";
import {
  FaBriefcase,
  FaChartBar,
  FaBuilding,
  FaProjectDiagram,
  FaSun,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaBriefcase />,
      title: "Smart City Solutions",
      desc: "Solusi kota pintar menyediakan teknologi pintar yang komprehensif untuk meningkatkan standar hidup di kota dan menciptakan peradaban yang lebih baik.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Infrastructure Solutions",
      desc: "Infrastruktur TI yang kuat dan andal dapat mendorong bisnis untuk mencapai tujuan mereka dan beradaptasi dengan perubahan pasar.",
    },
    {
      icon: <FaChartBar />,
      title: "Smart Office Solutions",
      desc: "Solusi untuk ruang kerja cerdas yang memungkinkan pekerja berkolaborasi untuk meningkatkan produktivitas.",
    },
    {
      icon: <FaBuilding />,
      title: "IT Strategic",
      desc: "Master Plan, Road Map",
    },
    {
      icon: <FaSun />,
      title: "IT Governance",
      desc: "Planning, Design, Development, Implementation, Maintenance & Support",
    },
    {
      icon: <FaCalendarAlt />,
      title: "IT Analytical",
      desc: "Data Scientist",
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <div className="underline"></div>

        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="icon-wrapper">
                <div className="icon">{item.icon}</div>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}