import { motion } from 'framer-motion';
import './Loader.scss';

export default function Loader() {
  return (
    <div className="loader">
      <motion.div
        className="loader__spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <p className="loader__text">Loading...</p>
    </div>
  );
}
