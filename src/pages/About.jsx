import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageWrapper from '@/components/common/PageWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import { testimonials } from '@/data/testimonials';
import { team } from '@/data/team';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, scaleUp } from '@/hooks/useScrollAnimation';
import { FiArrowRight, FiPhone, FiMail } from 'react-icons/fi';
import './About.scss';

export default function About() {
  const testimonialPreview = testimonials.slice(0, 2);

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>About Us — IbadanRealty</title>
        <meta name="description" content="Learn about IbadanRealty and our team of experts." />
      </Helmet>

      <section className="about-hero">
        <div className="container">
          <h1>About IbadanRealty</h1>
          <p>Ibadan's Trusted Real Estate Agency</p>
        </div>
      </section>

      <section className="section container">
        <SectionHeader 
          label="Our Story"
          title="12+ Years of Excellence in Ibadan Real Estate"
          subtitle="Since 2012, we've been helping families find their dream homes and investors build wealth through Ibadan properties. We were born in Ibadan. We grew up on these streets. We know the difference between a C of O and a Governor's Consent, between a genuine survey plan and a doctored one. When you work with us, you're not working with a call centre — you're working with your neighbour."
        />
        {/* <div className="about-content">
          <p>
            We were born in Ibadan. We grew up on these streets. We know the difference between a C of O and a Governor's Consent, between a genuine survey plan and a doctored one. When you work with us, you're not working with a call centre — you're working with your neighbour.
          </p>
        </div> */}
      </section>

      <section className="section container">
        <SectionHeader
          label="Meet the Team"
          title="Our Dedicated Real Estate Experts"
          subtitle="A diverse team with 10+ years of combined experience committed to your success"
        />
        <motion.div
          className="about-team-grid"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {team.map(member => (
            <motion.div key={member.id} variants={cardVariants} className="team-member-card">
              <div className="team-member-card__image">
                <img src={member.image} alt={member.name} />
                <div className="team-member-card__overlay">
                  <p>{member.specialization}</p>
                </div>
              </div>
              <div className="team-member-card__content">
                <p className="team-member-card__role">{member.role}</p>
                <h3>{member.name}</h3>
                <p className="team-member-card__bio">{member.bio}</p>
                <div className="team-member-card__contact">
                  <a href={`tel:${member.phone}`} className="contact-link" title={`Call ${member.name}`}>
                    <FiPhone />
                    <span>{member.phone}</span>
                  </a>
                  <a href={`mailto:${member.email}`} className="contact-link" title={`Email ${member.name}`}>
                    <FiMail />
                    <span>{member.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section container about-testimonials">
        <SectionHeader
          label="Client Stories"
          title="What Our Clients Say About Us"
          subtitle="Real feedback from families and investors we've helped"
        />

        <motion.div
          className="testimonials-preview"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {testimonialPreview.map(testimonial => (
            <motion.div key={testimonial.id} className="testimonial-preview-card" variants={fadeUp}>
              <p className="testimonial-preview-quote">"{testimonial.quote}"</p>
              <div className="testimonial-preview-author">
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-property">{testimonial.property}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="about-testimonials-cta">
          <Link to="/testimonials" className="cta-link">
            Read More Success Stories <FiArrowRight />
          </Link>
        </div>
      </section>

      <section className="section container about-cta">
        <div className="cta-box">
          <h3>Ready to Start Your Real Estate Journey?</h3>
          <p>Our team is here to help you find the perfect property or connect with the right buyer.</p>
          <Link to="/contact" className="btn btn--primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
