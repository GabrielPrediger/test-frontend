import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import clsx from 'clsx';
import { sizeClasses, type LoadingSpinnerProps } from './@types';

export default function LoadingSpinner({ size = 'md', text, className }: LoadingSpinnerProps) {
  return (
    <div className={clsx('flex flex-col items-center justify-center gap-4', className)}>
      <motion.div
        className={clsx('text-primary-600', sizeClasses[size])}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <Loader2 className="w-full h-full" />
      </motion.div>
      {text && <p className="text-sm text-gray-500 animate-pulse">{text}</p>}
    </div>
  );
}