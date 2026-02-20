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
      desc: "Smart city solutions provide comprehensive intelligent technologies to improve urban living standards and create a better civilization.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Infrastructure Solutions",
      desc: "A strong and reliable IT infrastructure enables businesses to achieve their goals and adapt to market changes.",
    },
    {
      icon: <FaChartBar />,
      title: "Smart Office Solutions",
      desc: "Solutions for smart workspaces that enable employees to collaborate and enhance productivity.",
    },
    {
      icon: <FaBuilding />,
      title: "IT Strategy",
      desc: "Master Plan, Roadmap",
    },
    {
      icon: <FaSun />,
      title: "IT Governance",
      desc: "Planning, Design, Development, Implementation, Maintenance & Support",
    },
    {
      icon: <FaCalendarAlt />,
      title: "IT Analytics",
      desc: "Data Science",
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

      <section className="description-section">
        <div className="description">
          <h2 className="title-description">Let Us Help You Grow & Thrive</h2>
          <p className="subtitle">
            We leverage our extensive experience and multi-industry expertise,
            along with strong collaboration with leading global IT principals
            and business partners, to become a leading provider of comprehensive
            IT solutions in Indonesia.
          </p>
        </div>
      </section>
    </section>
  );
}
