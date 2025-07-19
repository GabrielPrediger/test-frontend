import { motion } from 'framer-motion';

export default function HomePage() {

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <motion.div
        className="w-full max-w-md rounded-lg bg-gray-50 p-8 shadow-2xl inset-shadow-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        asdasdasdasddddddddd
      </motion.div>
    </div>
  );
}