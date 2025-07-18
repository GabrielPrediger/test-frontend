import { motion } from 'framer-motion';

export const ActionButton = ({ children, className, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`p-2 rounded-full transition-colors ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);