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
        <div className="services-header">
          <h2 className="services-title">
            Our <span>Services</span>
          </h2>
          <p className="services-subtitle">
            Solusi komprehensif yang dirancang untuk mendorong pertumbuhan
            bisnis Anda di era digital.
          </p>
        </div>

        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="card-number">{item.number}</div>
              <div className="icon-wrap">
                <span className="icon">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}