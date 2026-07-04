import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageWrapper from '@/components/common/PageWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import { team } from '@/data/team';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/hooks/useScrollAnimation';
import { FiMail, FiPhone } from 'react-icons/fi';
import './Agents.scss';

export default function Agents() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Our Agents — IbadanRealty</title>
        <meta name="description" content="Meet our experienced real estate agents in Ibadan." />
      </Helmet>

      <section className="agents-hero">
        <div className="container">
          <h1>Our Expert Agents</h1>
          <p>Meet the professionals dedicated to your real estate success</p>
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          label="Our Team"
          title="Experienced Real Estate Professionals"
          subtitle="Each member of our team brings years of expertise and dedication to every property transaction."
        />

        <motion.div
          className="agents-grid"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {team.map(agent => (
            <motion.div key={agent.id} className="agent-card" variants={fadeUp}>
              <div className="agent-card__image">
                <img src={agent.image} alt={agent.name} />
                <div className="agent-card__overlay">
                  <p>{agent.specialization}</p>
                </div>
              </div>
              <div className="agent-card__content">
                <h3>{agent.name}</h3>
                <p className="agent-card__role">{agent.role}</p>
                <p className="agent-card__bio">{agent.bio}</p>
                <div className="agent-card__contact">
                  <a href={`tel:${agent.phone}`} className="contact-link">
                    <FiPhone /> {agent.phone}
                  </a>
                  <a href={`mailto:${agent.email}`} className="contact-link">
                    <FiMail /> {agent.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="agents-cta">
          <h3>Ready to Work with Our Agents?</h3>
          <p>Contact us today to discuss your real estate needs</p>
          <Link to="/contact" className="btn btn--primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
