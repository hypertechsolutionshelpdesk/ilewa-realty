import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageWrapper from '@/components/common/PageWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import { testimonials } from '@/data/testimonials';
import { team } from '@/data/team';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/hooks/useScrollAnimation';
import { FiStar, FiArrowRight } from 'react-icons/fi';
import './Home.scss';

export default function Home() {
  const featuredTestimonials = testimonials.slice(0, 3);
  const featuredAgents = team.slice(0, 3);

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <FiStar key={i} size={14} fill="currentColor" />
    ));
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>IbadanRealty — Buy, Sell & Rent Properties in Ibadan, Nigeria</title>
        <meta name="description" content="Find verified properties in Bodija, Jericho, GRA, Oluyole and across Ibadan. Trusted by 500+ families." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hero__video"
        >
          <source src="/assets/videos/hero-ibadan.webm" type="video/webm" />
          <source src="/assets/videos/hero-ibadan.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1>Find Your Dream Home in Ibadan</h1>
          <p className="subtitle">Premium verified properties across Ibadan's best neighborhoods — trusted by over 500 families.</p>
        </div>
      </section>

      {/* Coming soon message */}
      {/* <section className="section container">
        <SectionHeader
          label="Welcome"
          title="IbadanRealty"
          subtitle="Your trusted partner in Ibadan real estate."
        />
      </section> */}

      {/* Featured Testimonials Section */}
      <section className="section container testimonials-section">
        <SectionHeader
          label="Success Stories"
          title="What Our Clients Say"
          subtitle="Join families and investors who found their perfect property with IbadanRealty"
        />

        <motion.div
          className="testimonials-featured"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {featuredTestimonials.map(testimonial => (
            <motion.div key={testimonial.id} className="testimonial-mini" variants={fadeUp}>
              <div className="testimonial-mini__stars">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-mini__quote">"{testimonial.quote}"</p>
              <div className="testimonial-mini__author">
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="testimonials-cta">
          <Link to="/testimonials" className="cta-link">
            Read More Success Stories <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* Featured Agents Section */}
      <section className="section container agents-section">
        <SectionHeader
          label="Our Team"
          title="Meet Our Agents"
          subtitle="Expert professionals dedicated to your real estate success"
        />

        <motion.div
          className="agents-featured"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {featuredAgents.map(agent => (
            <motion.div key={agent.id} className="agent-mini" variants={fadeUp}>
              <img src={agent.image} alt={agent.name} className="agent-mini__image" />
              <h4>{agent.name}</h4>
              <p className="agent-mini__role">{agent.role}</p>
              <p className="agent-mini__spec">{agent.specialization}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="agents-cta">
          <Link to="/agents" className="cta-link">
            View All Agents <FiArrowRight />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
