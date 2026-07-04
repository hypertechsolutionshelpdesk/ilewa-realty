import { motion } from 'framer-motion';
import { pageVariants } from '@/hooks/useScrollAnimation';

export default function PageWrapper({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
