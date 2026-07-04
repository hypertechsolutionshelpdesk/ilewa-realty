import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './WhatsAppFAB.scss';

const WHATSAPP_NUMBER = '2348012345678';
const DEFAULT_MSG = encodeURIComponent(
  "Hello! I found your website and I'm interested in a property in Ibadan. Please can you assist me?"
);

export default function WhatsAppFAB() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
    >
      <FaWhatsapp size={30} />
      <span className="fab__label">Chat with Us</span>
      <span className="fab__pulse" aria-hidden="true" />
      <span className="fab__pulse fab__pulse--delay" aria-hidden="true" />
    </motion.a>
  );
}
