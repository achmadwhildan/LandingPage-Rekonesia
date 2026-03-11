import "./Contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "tryon080208",
        "template_hx3ju8v",
        formRef.current,
        "PKLhtiLsRuKbZdmmt",
      )
      .then(
        () => {
          setStatus("success");
          setForm({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus("idle"), 4000);
        },
        (error) => {
          setStatus("error");
          console.log(error);
          setTimeout(() => setStatus("idle"), 4000);
        },
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h1 className="section-title">Contact Us</h1>
        <div className="title-line"></div>

        <div className="contact-grid">
          <div className="contact-info glass-card">
            <h3>PT REKONESIA</h3>
            <p className="tagline">For a more advanced Indonesia</p>

            <div className="info-block">
              <h4>Office</h4>
              <p>
                Metropolitan Tower Lantai 13-A
                Jl. RA Kartini - TB Simatupang Kav. 14
                Cilandak, Jakarta Selatan
                DKI Jakarta 12430
              </p>
            </div>

            <div className="info-block">
              <h4>Email</h4>
              <p>info[at]rekonesia.co.id</p>
            </div>

            <div className="info-block">
              <h4>Website</h4>
              <p>www.rekonesia.co.id</p>
            </div>
          </div>

          <div className="contact-form glass-card">
            <h3>Kirim Pesan</h3>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* STATUS MESSAGE */}
              {status === "success" && (
                <div className="status-message status-success">
                  <span className="status-icon">✓</span>
                  Email has been sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="status-message status-error">
                  <span className="status-icon">✕</span>
                  Failed to send email. Please try again later.
                </div>
              )}

              <button
                type="submit"
                className={`btn-submit ${status === "loading" ? "btn-loading" : ""}`}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className="spinner"></span>
                    Mengirim...
                  </>
                ) : (
                  "Kirim Pesan"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
