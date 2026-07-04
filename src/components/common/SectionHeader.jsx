import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { useScrollReveal } from '@/hooks/useScrollAnimation';
import './SectionHeader.scss';

export default function SectionHeader({ label, title, subtitle, align = 'center' }) {
  const [ref, isInView] = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      className={`section-header section-header--${align}`}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {label && (
        <motion.span className="label-text" variants={fadeUp}>
          {label}
        </motion.span>
      )}
      <motion.div className="label-underline" variants={fadeUp} />
      <motion.h2 variants={fadeUp}>{title}</motion.h2>
      {subtitle && (
        <motion.p className="subtitle" variants={fadeUp}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
