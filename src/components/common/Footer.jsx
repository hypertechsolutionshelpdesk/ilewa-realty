import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__section">
          <h3 className="footer__heading">Ìlé Wa Realty</h3>
          <p className="footer__desc">
            Premium real estate agency serving Ibadan, Oyo State, Nigeria. Trusted by over 500 families since 2012.
          </p>
          <p className="footer__motto">
            <em>"Ìlé Ni Ìtùnú Ọkàn" — Home is the heart's rest</em>
          </p>
          <div className="footer__socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Properties</h4>
          <ul className="footer__links">
            <li><Link to="/properties">For Sale</Link></li>
            <li><Link to="/properties">For Rent</Link></li>
            <li><Link to="/properties">Land</Link></li>
            <li><Link to="/properties">Commercial</Link></li>
            <li><Link to="/properties">New Listings</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact">
            <li>
              <FaMapMarkerAlt />
              <span>123 Bodija Estate, Ibadan, Oyo State</span>
            </li>
            <li>
              <FaPhone />
              <a href="tel:+2348012345678">+234 801 234 5678</a>
            </li>
            <li>
              <FaEnvelope />
              <a href="mailto:hello@ibadanrealty.com">hello@ibadanrealty.com</a>
            </li>
          </ul>
          <div className="footer__hours">
            <p className="small-text">Mon–Fri: 9 AM–6 PM</p>
            <p className="small-text">Sat: 10 AM–4 PM</p>
            <p className="small-text">Sun: Closed</p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="small-text">
            &copy; 2025 IbadanRealty. By Hypertech Solutions. All rights reserved. | <Link to="/">Privacy Policy</Link> | <Link to="/">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
