import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {...formData };
    emailjs
      .send('service_e5p2zw8', 'template_nxxq0ux', templateParams, {
        publicKey: 'dEz55kIY-mricyQxF',
      })
      .then(
        () => {
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            subject: '',
            message: ''
          });
          console.log('SUCCESS!');
          setSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="fade-in-up">Get in Touch</h1>
          <p className="contact-hero-text fade-in-up">
            Ready to transform your agricultural storage operations?
            Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Let's Connect</h2>
              <p>
                We're excited to learn about your storage challenges and discuss how
                Sens Operations can help optimize your operations.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div>
                    <h4>General Inquiries</h4>
                    <p>hello@sensops.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-cta">
                <h3>Why Work With Us?</h3>
                <ul>
                  <li>Proven technology deployed in commercial operations</li>
                  <li>Collaborative partnership approach</li>
                  <li>Ongoing support and optimization</li>
                  <li>Measurable results and ROI</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>We've received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="demo">Request a Demo</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
