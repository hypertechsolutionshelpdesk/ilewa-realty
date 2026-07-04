import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import { IoBedOutline, IoWaterOutline } from 'react-icons/io5';
import { BiArea } from 'react-icons/bi';
import { RiParkingLine } from 'react-icons/ri';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { PropertyContext } from '@/context/PropertyContext';
import { formatPrice } from '@/utils/formatPrice';
import './PropertyCard.scss';

export default function PropertyCard({ property }) {
  const { isFavorite, toggleFavorite } = useContext(PropertyContext);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(property.id);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const imageUrl = property.images?.[0] || '/assets/images/properties/default-property.jpg';

  return (
    <motion.article
      className="property-card"
      whileHover={{ y: -8, boxShadow: 'var(--shadow-xl)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="property-card__image-wrap">
        {!imageLoaded && <div className="property-card__skeleton" />}
        <img
          src={imageUrl}
          alt={property.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
          className={imageLoaded ? 'loaded' : ''}
        />
        <span className={`badge badge--${property.status === 'For Sale' ? 'status' : 'status'}`}>
          {property.status}
        </span>
        {property.isNew && <span className="badge badge--new">New</span>}
        <button
          className="property-card__fav"
          onClick={handleFavoriteClick}
          aria-label={isFavorite(property.id) ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite(property.id) ? <FaHeart color="#C0392B" /> : <FaRegHeart />}
        </button>
      </div>

      <div className="property-card__body">
        <div className="property-card__price">{formatPrice(property.price)}</div>
        <h3 className="property-card__title">{property.title}</h3>
        <p className="property-card__location">
          <FiMapPin /> {property.location.neighborhood}, Ibadan
        </p>

        <div className="property-card__features">
          <span title="Bedrooms">
            <IoBedOutline /> {property.features.bedrooms}
          </span>
          <span title="Bathrooms">
            <IoWaterOutline /> {property.features.bathrooms}
          </span>
          <span title="Square meters">
            <BiArea /> {property.features.sqm}m²
          </span>
          <span title="Parking">
            <RiParkingLine /> {property.features.parking}
          </span>
        </div>

        <Link to={`/properties/${property.id}`} className="property-card__cta">
          View Details <FiArrowRight />
        </Link>
      </div>
    </motion.article>
  );
}
