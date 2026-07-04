import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Button.scss';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  disabled = false,
  className = '',
  icon: Icon,
  ...props
}) {
  const baseClass = `btn btn--${variant} btn--${size} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="btn__icon" />}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          {content}
        </motion.button>
      </Link>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClass}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {content}
    </motion.button>
  );
}
