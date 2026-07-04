import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import PageWrapper from '@/components/common/PageWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import Button from '@/components/common/Button';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import './Contact.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.name && formData.email && formData.phone && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Contact Us — IbadanRealty</title>
        <meta name="description" content="Get in touch with IbadanRealty for property inquiries." />
      </Helmet>

      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Have questions? We're here to help</p>
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          label="Contact"
          title="Reach Out to Us"
          subtitle="Get in touch with our team for any property inquiries or assistance."
        />

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>Your message has been received. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength="2"
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
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+234"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="interest">Property Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="">Select interest</option>
                    <option value="buying">Buying</option>
                    <option value="selling">Selling</option>
                    <option value="renting">Renting</option>
                    <option value="investment">Investment</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength="20"
                    rows="5"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="submit-btn">
                  Send Enquiry
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <FiMapPin className="info-icon" />
              <h3>Address</h3>
              <p>123 Bodija Estate<br />Ibadan, Oyo State<br />Nigeria</p>
            </div>

            <div className="info-card">
              <FiPhone className="info-icon" />
              <h3>Phone</h3>
              <p>
                <a href="tel:+2348012345678">+234 801 234 5678</a>
              </p>
            </div>

            <div className="info-card">
              <FiMail className="info-icon" />
              <h3>Email</h3>
              <p>
                <a href="mailto:hello@ibadanrealty.com">hello@ibadanrealty.com</a>
              </p>
            </div>

            <div className="info-card">
              <h3>Business Hours</h3>
              <p>
                Monday – Friday: 9 AM – 6 PM<br />
                Saturday: 10 AM – 4 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
