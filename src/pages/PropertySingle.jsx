import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PropertyContext } from '@/context/PropertyContext';
import PageWrapper from '@/components/common/PageWrapper';
import { formatPrice } from '@/utils/formatPrice';
import { FiArrowLeft, FiPhone, FiMail } from 'react-icons/fi';
import './PropertySingle.scss';

export default function PropertySingle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allProperties } = useContext(PropertyContext);
  const property = allProperties.find(p => p.id === id);

  if (!property) {
    return (
      <PageWrapper>
        <div className="container" style={{ paddingTop: '200px', textAlign: 'center' }}>
          <h1>Property Not Found</h1>
          <button onClick={() => navigate('/properties')}>Back to Properties</button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>{property.title} — IbadanRealty</title>
        <meta name="description" content={property.description} />
      </Helmet>

      <section className="property-detail">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/properties')}>
            <FiArrowLeft /> Back to Listings
          </button>

          <div className="property-detail__grid">
            {/* Main content */}
            <div className="property-detail__main">
              {/* Gallery */}
              <div className="property-gallery">
                <img
                  src={property.images?.[0] || '/assets/images/properties/default-property.jpg'}
                  alt={property.title}
                  className="property-gallery__main"
                />
              </div>

              {/* Header */}
              <div className="property-header">
                <h1>{property.title}</h1>
                <div className="property-header__meta">
                  <span className="badge badge--status">{property.status}</span>
                  <span className="property-type">{property.type}</span>
                </div>
                <div className="property-price">{formatPrice(property.price)}</div>
                <p className="property-location">{property.location.neighborhood}, Ibadan</p>
              </div>

              {/* Features */}
              <div className="property-features">
                <div className="feature-item">
                  <span className="feature-label">Bedrooms</span>
                  <span className="feature-value">{property.features.bedrooms}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Bathrooms</span>
                  <span className="feature-value">{property.features.bathrooms}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Area</span>
                  <span className="feature-value">{property.features.sqm}m²</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Parking</span>
                  <span className="feature-value">{property.features.parking}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Year Built</span>
                  <span className="feature-value">{property.features.yearBuilt}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Floors</span>
                  <span className="feature-value">{property.features.floors}</span>
                </div>
              </div>

              {/* Description */}
              <div className="property-description">
                <h3>About this property</h3>
                <p>{property.description}</p>
              </div>

              {/* Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <div className="property-amenities">
                  <h3>Amenities</h3>
                  <ul className="amenities-list">
                    {property.amenities.map((amenity, idx) => (
                      <li key={idx}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="property-detail__sidebar">
              {/* Agent Contact */}
              <div className="agent-card">
                <h3>Contact Agent</h3>
                <p className="agent-name">{property.agent.name}</p>
                <div className="agent-contact">
                  <a href={`tel:${property.agent.phone}`} className="contact-btn">
                    <FiPhone /> Call
                  </a>
                  <a href={`https://wa.me/${property.agent.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="contact-btn">
                    WhatsApp
                  </a>
                  <a href={`mailto:${property.agent.email}`} className="contact-btn">
                    <FiMail /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
