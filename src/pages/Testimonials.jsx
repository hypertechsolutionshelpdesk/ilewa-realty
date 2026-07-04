import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/common/PageWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import { testimonials } from '@/data/testimonials';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/hooks/useScrollAnimation';
import { FiStar } from 'react-icons/fi';
import './Testimonials.scss';

export default function Testimonials() {
  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <FiStar key={i} size={16} fill="currentColor" />
    ));
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Testimonials & Success Stories — IbadanRealty</title>
        <meta name="description" content="Read success stories from our satisfied clients." />
      </Helmet>

      <section className="testimonials-hero">
        <div className="container">
          <h1>Client Success Stories</h1>
          <p>Hear from families and investors who found their perfect property with us</p>
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          label="Testimonials"
          title="What Our Clients Say"
          subtitle={`Join over ${testimonials.length} satisfied clients who have successfully completed their property transactions with IbadanRealty.`}
        />

        <motion.div
          className="testimonials-grid"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map(testimonial => (
            <motion.div key={testimonial.id} className="testimonial-card" variants={fadeUp}>
              <div className="testimonial-card__stars">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="testimonial-card__quote">
                "{testimonial.quote}"
              </blockquote>

              <div className="testimonial-card__author">
                <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                <div className="author-info">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-property">{testimonial.property}</p>
                  <p className="author-location">{testimonial.location}</p>
                  <p className="author-date">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="testimonials-stats">
          <div className="stat">
            <h4>{testimonials.length}+</h4>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h4>5.0★</h4>
            <p>Average Rating</p>
          </div>
          <div className="stat">
            <h4>12+</h4>
            <p>Years in Business</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
